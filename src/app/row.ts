class TreeNeedles implements ITreeRow{
  branches: string[] = [];

  constructor(number_of_branches: number){
    for (let i of new Array(number_of_branches))
      this.branches.push('X');
  }

  get length(): number { return this.branches.length; }
}
