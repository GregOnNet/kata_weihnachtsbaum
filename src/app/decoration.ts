class Decoration implements ITreeRow {
  branches: string[] = ['*'];

  get length(): number { return 1; }
}
