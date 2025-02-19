var year = eval(prompt("Nhập năm: "));
(year%100==0)||((year%4==0)&&(year%100!=0)) ? alert("Đây là năm nhuận.") : alert("Đây là năm không nhuận.")  