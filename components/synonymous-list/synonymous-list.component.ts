import { SynonymousService } from './../../services/synonymous.service';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-synonymous-list',
  templateUrl: './synonymous-list.component.html',
  styleUrls: ['./synonymous-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SynonymousListComponent implements OnInit {

  @Input() list: string[];
  @Input() loading: boolean;
  constructor(private synonymService: SynonymousService) { 
  }

  ngOnInit() {
  }

  setSynonymToChange(synonym){
    this.synonymService.setSynonymToChange(synonym);
  }

}
