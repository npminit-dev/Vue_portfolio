export type Project = {
  name:string
  description:string
  icon: ProjectIcon
  cover: ProjectCover
}

export type ProjectIcon = {
  name:string
  color:string
}

export type ProjectCover = {
  coverUrl:string
  charCoverUrl:string
}