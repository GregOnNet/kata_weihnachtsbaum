class Trunk implements ITreeRow {
  branches: string[] = ['X'];

  get length(): number { return 1; }
}
