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

export type Cover = {
  coverUrl:string
  charCoverUrl:string
}

export type ProjectCover = {
  alt: string,
  md: Cover,
  sm: Cover
}

export type ProjectLink = {
  name:string
  url:string
}