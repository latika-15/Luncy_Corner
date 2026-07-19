const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export default function generateReviewCode() {
  let code = "LC-";

  for (let group = 0; group < 2; group++) {
    for (let i = 0; i < 4; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }

    if (group === 0) code += "-";
  }

  return code;
}