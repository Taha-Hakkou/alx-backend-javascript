interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}

interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credis' };
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

/*
const credit1: MajorCredits = {credits: 50}; // incorrect
const credit2: MajorCredits = {credits: 37}; // incorrect
console.log(sumMajorCredits(credit1, credit2));
// MajorCredits {credits: 87}
*/
