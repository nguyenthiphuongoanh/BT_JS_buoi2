//  Bài 1: Tính tiền lương nhân viên
function tinhTongLuong() {
    // input: soNgayLam: number, tienLuong1Ngay: number
    var tienLuong1Ngay = document.getElementById('tienLuong1Ngay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    // kiểm tra intput
    //   console.log('tienLuong1Ngay', tienLuong1Ngay);
    //   console.log('soNgayLam', soNgayLam);

    // output: tongLuong: number
    var tongLuong = 0;

    // process: xử lý
    tongLuong = tienLuong1Ngay * soNgayLam;

    document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString();
}

// Bài 2: Tính giá trị trung bình
function tinhTrungBinh() {
    // input: diemToan: number, diemLy: number, diemHoa: number, diemSinh: number, diemVan: number
    var diemToan = document.getElementById('diemToan').value;
    var diemLy = document.getElementById('diemLy').value;
    var diemHoa = document.getElementById('diemHoa').value;
    var diemSinh = document.getElementById('diemSinh').value;
    var diemVan = document.getElementById('diemVan').value;
    // kiểm tra input
    // console.log('diemToan', diemToan);
    // console.log('diemLy', diemLy);
    // console.log('diemHoa', diemHoa);
    // console.log('diemSinh', diemSinh);
    // console.log('diemVan', diemVan);

    // output: trungBinh: number
    var trungBinh = 0;

    // process: xử lý
    trungBinh = (Number(diemToan) + Number(diemLy) + Number(diemHoa) + Number(diemSinh) + Number(diemVan)) / 5;

    document.getElementById('trungBinh').innerHTML = trungBinh;

}

// Bài 3: Quy đổi tiền
function quyDoiTien() {
    // input: soTienUSD: number
    var soTienUSD = document.getElementById('soTienUSD').value;
    // kiểm tra input
    // console.log('soTienUSD', soTienUSD)

    // output: soTienVND: number
    var soTienVND = 0;

    // process: xử lý
    soTienVND = 23500 * soTienUSD

    document.getElementById('soTienVND').innerHTML = soTienVND.toLocaleString();
}

// Bài 4: Tính diện tích, chu vi hình chữ nhật
function tinhToan() {
    // input: chieuDai: number, chieuRong: number
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    // kiểm tra input
    // console.log('chieuDai', chieuDai);
    // console.log('chieuRong', chieuRong);

    // output:
    var chuVi = 0;
    var dienTich = 0;

    // process: xử lý
    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    dienTich = chieuDai * chieuRong

    document.getElementById('giaTriTinhRa').innerHTML = 'Diện tích: ' + dienTich + '; ' + 'Chu vi: ' + chuVi;
}

// Bài 5: Tính tổng 2 ký số 
function tinhTong2KySo() {
    // input: so: number
    var so = document.getElementById('so').value;
    // kiểm tra input
    //  console.log('số', so);

    // output:
    var tongKySo = 0;

    // process: xử lý
    var soHangChuc = Math.floor(so / 10)
    var SoHangDonVi = Math.floor(so % 10)
    tongKySo = soHangChuc + SoHangDonVi

    document.getElementById('tongKySo').innerHTML = tongKySo;
}




