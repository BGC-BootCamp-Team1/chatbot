import { TestBed } from '@angular/core/testing';

import { AliApiService } from './ali-api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../config/environment";

describe('AliApiService', () => {
  let service: AliApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AliApiService]
    });
    service = TestBed.inject(AliApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return content from generateContent', () => {
    const mockResponse = {
      output: {
        choices: [
          { message: { content: '高情商的回复' } }
        ]
      }
    };

    service.generateContent('测试内容').subscribe(content => {
      expect(content).toBe('高情商的回复');
    });

    const req = httpMock.expectOne(environment.apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${environment.apiKey}`);
    req.flush(mockResponse);
  });

});
