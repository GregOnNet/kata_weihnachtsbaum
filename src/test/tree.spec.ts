/// <reference path="../../typings/jasmine/jasmine"/>

/*
 *      X     -> branch (Zweig)
 *     XXX
 *    XXXXX
 *   XXXXXXX
 *      X     -> trunk (Stamm)
 */

describe('Creating the christmas tree', () => {

  var tree: Tree;

  beforeEach(() => {
    tree = new Tree();
  })

  it('has a trunk', () => {
    expect(tree.trunk.branches).toEqual(['X']);
  });
});

describe('Spreading a tree by its fundamental branches', () => {

  it('creates all base branches', () => {
    var tree = new Tree();
    tree.spread(9);

    expect(tree.rows[0].branches.length).toBe(9);
  });

  it('creates all branches represented by "X"', () => {
    var tree = new Tree().spread(9);
    expect(tree.rows[0].branches).toEqual(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']);
  });
});

describe('Growing the christmas tree', () => {
  var tree;

  beforeEach(() => {
    tree = new Tree()
      .spread(9)
      .grow();
  })

  it('adds a new row of branches till one branch is left', () => {
    expect(tree.rows.length).toBe(5);
  })

  it('has two branches less in each row', () => {
    expect(tree.rows[0].branches.length).toBe(1);
    expect(tree.rows[1].branches.length).toBe(3);
    expect(tree.rows[2].branches.length).toBe(5);
    expect(tree.rows[3].branches.length).toBe(7);
    expect(tree.rows[4].branches.length).toBe(9);
  });
});

describe('Showing the crhistmas tree to every one', () => {
  var expected = '    X\n' +
    '   XXX\n' +
    '  XXXXX\n' +
    ' XXXXXXX\n' +
    'XXXXXXXXX\n' +
    '    X';

  it('presents its trunk and its branches', () => {
    var tree = new Tree().spread(9).grow();
    expect(tree.present()).toEqual(expected);
  });
});

describe('Decorating the christmas tree with the star', () => {
  var expected = '    *\n' +
    '    X\n' +
    '   XXX\n' +
    '  XXXXX\n' +
    ' XXXXXXX\n' +
    'XXXXXXXXX\n' +
    '    X';

  it('presents the decoration', () => {
    var tree = new Tree().spread(9).grow().decorate();
    expect(tree.present()).toEqual(expected);
  });
});
