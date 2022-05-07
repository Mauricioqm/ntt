import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarContinente'
})
export class FiltrarContinentePipe implements PipeTransform {

  transform(item: any, searchValue?: string) {
    console.log(item, searchValue);
    if (searchValue === undefined) {
      return item;
    }
    return item.filter((i: any) => {
      let name = i.region
        .replace(/\s+/g, '')
        .toLowerCase()
        .includes(searchValue.toLocaleLowerCase().replace(/\s+/g, ''))
        ? i
        : '';
      return name;
    }); 
  }

}
