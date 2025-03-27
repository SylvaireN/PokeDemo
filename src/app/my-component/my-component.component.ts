import { Component } from '@angular/core';
import { PokeDetail, Pokemon } from '../pokemon';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent {
id: string = '';
selectedPokeId: string = '';
searchPokeName: string = '';
pokeDetail: PokeDetail = {} as PokeDetail;

pokes : Pokemon[] = [];

constructor(private pokeService: PokeAPIServiceService, private pokeShareInfoService: PokeShareInfoService) {
/*   this.pokes.push(new Pokemon('1', 'pickachu'));
  this.pokes.push(new Pokemon('2', 'bulbasaur'));
  this.pokes.push(new Pokemon('3', 'ivysaur'));
  this.pokes.push(new Pokemon('4', 'venusaur'));
  this.pokes.push(new Pokemon('5', 'charmander')); */
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.pokeService.getPokemons().subscribe((data) => {
    //const res = data.results as any[];
    data.results.forEach((e, index) => {
      this.pokes.push(new Pokemon('' + index, e.name, e.url));
    });

  });
}

go() {

  //this.pokeShareInfoService.setValue(this.selectedPokeId);

   if (this.selectedPokeId != '') {
     this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data => {
      this.pokeDetail = data
      this.pokeShareInfoService.setValue(this.selectedPokeId);
    });
   }
}

}
