import { Devs } from "./Devs"

export interface Page {

  content:Array<Devs>
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  number: number
  sort: number
  first: boolean
  numberOfElements: number
  empty: boolean

}


export interface PageQuery{
  pageNumber :number,
  pageSize:number
}

