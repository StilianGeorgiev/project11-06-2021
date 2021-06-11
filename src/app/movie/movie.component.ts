import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-movie',
templateUrl: './movie.component.html',
styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

title = "Movies";

movies = [
{name: "Enemy of the gates"},
{name: "Avatar"},
{name: "Jurassic park"}
];

constructor() { }

ngOnInit(): void {
}

}