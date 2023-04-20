import { Component } from '@angular/core';
import { Radio } from './Radio/Radio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
  Radios:Radio[]=
 [
    {
       "nome": "Radio Maria",
       "frequenza": 95.1,
       "genere": "religiosa",
       "anno": 1991
    },
    {
       "nome": "Rai Radio 1",
       "frequenza": 87.6,
       "genere": "varie",
       "anno": 1966
    },
    {
       "nome": "Virgin Radio",
       "frequenza": 98.7,
       "genere": "musica",
       "anno": 1999
    },
    {
       "nome": "RTL 102.5",
       "frequenza": 92.4,
       "genere": "musica",
       "anno": 1989
    },
    {
       "nome": "Radio ZETA Italiana",
       "frequenza": 88.9,
       "genere": "musica",
       "anno": 1984
    },
    {
       "nome": "Radio Monte Carlo",
       "frequenza": 106.1,
       "genere": "musica",
       "anno": 1977
    }
 ];
 sortByfrequenza: boolean = true;
    sortLabel: string = "frequenza (crescente)";

    onSortClick() {
        if (this.sortByfrequenza)
        {
            this.Radios = this.Radios.sort((a, b) => b.frequenza - a.frequenza);
            this.sortLabel = "frequenza (crescente)";
        }

        this.sortByfrequenza = !this.sortByfrequenza;
    }

    ngInit() {
        this.onSortClick();
    }

}
