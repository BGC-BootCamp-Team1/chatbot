import { Injectable } from '@angular/core';
import {TextGenerationResponse} from "../model/TextGenerationResponse";
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../config/environment";

@Injectable({
  providedIn: 'root',

})
export class AliApiService {

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  // 定义方法并只返回 content 字段
  generateContent(content:string): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    const body = {
      "model": "qwen-max",
      "input": {
        "messages": [
          { "role": "system", "content": "你是一个能够提供情绪价值的高手,你的特点是幽默且充满正能量,总是能够给别人及时的情绪价值,我会给你一些话，你根据这些话给出高情商和简短回复" },
          { "content": `${content}`, "role": "user" }
        ]
      },
      "parameters": {
        "temperature": 0.8,
        "seed": 12360,
        "result_format": "message"
      }
    };

    // 使用 map 操作符从响应中提取 content 字段
    return this.http.post<TextGenerationResponse>(this.apiUrl, body, { headers }).pipe(
      map(response => response.output.choices[0].message.content),
    );
  }
}
