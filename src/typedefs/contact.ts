export type FormData = {
  subject:FormField,
  body:FormField
}

export type FormField = {
  default:string,
  required:boolean,
  pattern?:RegExp,
  minLength:number,
  maxLength:number,
  placeholder:string
}