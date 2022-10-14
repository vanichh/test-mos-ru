export function paginationBtn(
  htmlElem: HTMLDivElement,
  countBtn: number,
  page: number
): void {
  const ArrBtn: number[] = Array(countBtn)
    .fill(1)
    .map((item, index) => item + index);

  htmlElem.innerHTML = '';
  if (ArrBtn.length <= 1) {
    return;
  }
  htmlElem.insertAdjacentHTML(
    'afterbegin',
    `
  ${ArrBtn.reduce(
    (acum, num) =>
      (acum += `<button data-id=${num} class="btn${
        num === page ? ' active' : ''
      }">${num}</button>`),
    ''
  )}
  `
  );
}
