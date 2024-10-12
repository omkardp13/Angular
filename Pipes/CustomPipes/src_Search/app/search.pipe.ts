import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchTerm: string, key: string): any[] {
    if (!value || !searchTerm || !key) {
      return value; // Return the array as is if search term or key is not provided
    }

    searchTerm = searchTerm.toLowerCase();

    // Filter the array based on the key and search term
    return value.filter(item => 
      item[key]?.toString().toLowerCase().includes(searchTerm)
    );
  }
}
