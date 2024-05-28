import { Injectable } from '@angular/core';

export interface MenuItem {
  label: string;
  route: string;
  requiredGroups: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: MenuItem[] = [
    { label: 'Dashboard', route: '/dashboard', requiredGroups: ['Admin', 'User'] },
    { label: 'Admin Panel', route: '/admin', requiredGroups: ['Admin'] },
    { label: 'User Profile', route: '/profile', requiredGroups: ['User'] },
  ];

  getMenuItems(userGroups: string[]): MenuItem[] {
    return this.menuItems.filter(item =>
      item.requiredGroups.some(group => userGroups.includes(group))
    );
  }
}

