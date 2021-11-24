import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthLibService {

  private userName!: string;

  /**
   * Returns the username of the current logged user
   * @returns { string } username
   */
  public get user(): string {
    return this.userName;
  }

  constructor() {}

  /**
   * Logs in the user in the app
   * @param {string} userName
   * @param {string} password
   * @returns {void}
   */
  public login(userName: string, password: string): void {
    this.userName = userName;
  }

}
