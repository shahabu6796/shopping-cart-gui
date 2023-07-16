import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBooks(){
    return [
      {
        name:'Core Java: An Integrated Approach',
        author:'R. Nageswara Rao',
        src : 'https://m.media-amazon.com/images/I/51VvEvjRZ+L.jpg',
        price:700,
        quantity:0
      },
      {
        name:'100+ Solutions in Java: A Hands-On Introduction to Programming in Java',
        author:'Dhruti Shah',
        src : 'https://m.media-amazon.com/images/I/51qr2oQgVOL.jpg',
        price:900,
        quantity:0
      },
      {
        name:'Self Love: Woman\s book for a happy life (happiness, mindfulness, wellness, self-confidence)',
        author:' Vivia Masko',
        src : 'https://m.media-amazon.com/images/I/41W2qtIPe1L.jpg',
        price:0,
        quantity:0
      },
      {
        name:'Death; An Inside Story: A book for all those who shall die',
        author:'Sadhguru',
        src : 'https://m.media-amazon.com/images/I/71UwEnqYaLL._AC_UY218_.jpg',
        price:188,
        quantity:0
      },
      {
        name:'The Book Thief: TikTok made me buy it! The life-affirming international bestseller',
        author:'Markus Zusak',
        src : 'https://m.media-amazon.com/images/I/71H52+sSb4L._AC_UY218_.jpg',
        price:280,
        quantity:0
      },
      {
        name:'The Book of Life',
        author:'J. Krishnamurti',
        src : 'https://m.media-amazon.com/images/I/71Wlrh6EbxL._AC_UY218_.jpg',
        price:99,
        quantity:0
      },
      {
        name:'Steve the Noob in a New World: Book 12 (Steve the Noob in a New World (Saga 2))',
        author:'Steve the Noob',
        src : 'https://m.media-amazon.com/images/I/71F+YOlvY+L._AC_UY218_.jpg',
        price:0,
        quantity:0
      }
      
    ]
  }
}
