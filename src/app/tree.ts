class Tree {
  trunk      : Trunk;
  decoration : Decoration;
  foundation : TreeNeedles;
  rows       : Array<ITreeRow>;

  constructor() {
    this.trunk = new Trunk();
    this.rows = [];
  }

  spread(number_of_branches: number) {
    this.foundation = new TreeNeedles(number_of_branches);
    this.rows.push(this.foundation);
    return this;
  }

  grow() {
    this.addThinnerRow(this.foundation.length, 2)
    return this;
  }

  decorate() {
    this.decoration = new Decoration();
    return this;
  }

  present() {
    var tree = this.rows.slice(0);

    if(this.decoration)
      tree.unshift(this.decoration);

    if(this.trunk)
      tree.push(this.trunk);

    var output = '';

    for(let row of tree)
      output += this.intend(row.length) +
                this.format(row);

    return this.clean(output);
  }

  private addThinnerRow(base:number, thinning: number) {
    for(let i = base - thinning; i > 0; i-= thinning)
      this.rows.unshift(new TreeNeedles(i));
  }

  private intend(row_length: number) {
    var spaces = ''
    var spacesCount = (this.foundation.length -
                       row_length) / 2;

    for(let i = 0; i < spacesCount; i++)
     spaces += ' ';

    return spaces;
  }

  private format(row: ITreeRow) {
    return row.branches.reduce((current, next) =>
      `${current}${next}`) +
      '\n';
  }

  private clean(output: string) {
    var lastLineBreak = output.lastIndexOf('\n');
    return output.substr(0, lastLineBreak);
  }
}
