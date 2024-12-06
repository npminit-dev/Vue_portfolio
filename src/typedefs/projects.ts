export type Project = {
  name:string
  description:string
  icons: ProjectIcon[]
  links: ProjectLink[]
  cover: ProjectCover
}

export type ProjectIcon = {
  name:string
  background:string
}

export type ProjectCover = {
  coverUrl:string
  charCoverUrl:string
}

export type ProjectLink = {
  name:string
  url:string
}