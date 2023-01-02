import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PhotoBoardService } from './photo-board.service';

describe(PhotoBoardService.name, () => {
  beforeEach(() => {
    TestBed .configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService],
    });
  })
})
