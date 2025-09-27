import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // مهم للتوجيه بعد تسجيل الخروج
import { CatService } from '../../services/cat-service';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-image-template',
  imports: [CommonModule],
  templateUrl: './image-template.html',
  styleUrl: './image-template.css'
})
export class ImageTemplate implements OnInit {

  imagesIds: string[] = [];
  favorites: string[] = [];

  pageSize = 9;
  currentPage = 1;

  constructor(private catService: CatService, private router: Router, private userService : UserService) {}

  ngOnInit() {
    this.catService.getCats().subscribe({
      next: (images) => {
        this.imagesIds = images.map((image) => `https://cataas.com/cat/${image.id}`);
      },
      error: (err) => {
        console.error('Error while fetching cats:', err);
      }
    });

    const fav = localStorage.getItem('favorites');
    this.favorites = fav ? JSON.parse(fav) : [];
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']); 
  }

  get pagedImages(): string[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.imagesIds.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.imagesIds.length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  toggleFav(url: string) {
    if (this.isFav(url)) {
      this.favorites = this.favorites.filter(img => img !== url);
    } else {
      this.favorites.push(url);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFav(url: string): boolean {
    return this.favorites.includes(url);
  }
}
