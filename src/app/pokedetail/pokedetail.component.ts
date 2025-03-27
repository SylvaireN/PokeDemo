import { Component, Input } from '@angular/core';
import { PokeDetail } from '../pokemon';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-pokedetail',
  standalone: false,
  templateUrl: './pokedetail.component.html',
  styleUrl: './pokedetail.component.css',
  providers: []
})
export class PokedetailComponent {

  @Input('detail')
  detail: PokeDetail = {} as PokeDetail;

  constructor( private pokeShareInfoService: PokeShareInfoService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pokeShareInfoService.getObservable().subscribe(e => console.log('e ' + e));

  }
}
