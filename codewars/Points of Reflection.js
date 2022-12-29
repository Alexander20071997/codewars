function symmetricPoint(p, q) {
    return p.map((a,i) => q[i]*2-a)
  }