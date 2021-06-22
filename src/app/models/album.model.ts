export class Album {
  constructor(
    public name?: string,
    public description?: string,
    public cover?: string,
    public episodes?: Array<string>
  ) {}
}
