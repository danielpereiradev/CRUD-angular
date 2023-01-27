import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,args:any): any {
    const res = []
    for(const dev of value){
      if(dev.name.toLowerCase().indexOf(args.toLowerCase()) > -1){
        res.push(dev)
      }

    }
    return res

  }

}
