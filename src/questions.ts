interface questionI {
  question: { id: string };
  effect: {
    econ: number;
    dipl: number;
    govt: number;
    scty: number;
  };
}
const questions: Array<questionI> = [
  {
    question: {
      id: 'Pentingnya pemerintah untuk campur tangan dalam perekonomian untuk melindungi konsumen.',
    },
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Semakin bebas pasar, semakin bebas masyarakatnya.',
    },
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Penindasan oleh perusahaan lebih menjadi perhatian daripada penindasan oleh pemerintah.',
    },
    effect: {
      econ: 10,
      dipl: 0,
      govt: -5,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Lebih baik memelihari keseimbangan bujet negara daripada menjamin kesejahteraan seluruh masyarakat.',
    },
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Penelitian yang didanai pemerintah atau publik lebih menguntungkan masyarakat dibandingkan diserahkan ke pasar atau swasta.',
    },
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    question: {
      id: 'Pengenaan bea cukai pada perdagangan internasional penting untuk mendorong produksi domestik. ',
    },
    effect: {
      econ: 5,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Setiap orang berkontribusi sesuai kemampuannya dan setiap orang diberikan sesuai kebutuhannya masing-masing.',
    },
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Akan jadi langkah terbaik jika program sosial dihapuskan dan mendorong sumbangan dari individu atau swasta.',
    },
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Pajak seharusnya dinaikan pada orang-orang kaya untuk memenuhi kebutuhan orang-orang miskin.',
    },
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: { id: 'Pewarisan adalah bentuk kekayaan yang sah.' },
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: -5,
    },
  },
  {
    question: {
      id: 'Kebutuhan dasar seperti jalan raya dan listrik seharusnya dimiliki publik atau pemerintah.',
    },
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: { id: 'Campur tangan pemerintah adalah ancaman pada ekonomi.' },
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Seseorang yang memiliki kemampuan untuk membayar seharusnya menerima layanan kesehatan yang lebih baik.',
    },
    effect: {
      econ: -10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: { id: 'Pendidikan yang berkualitas adalah hak semua orang.' },
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 5,
    },
  },
  {
    question: {
      id: 'Alat produksi harus menjadi milik pekerja yang menggunakannya.',
    },
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: { id: 'Perserikatan Bangsa Bangsa harus dihapuskan.' },
    effect: {
      econ: 0,
      dipl: -10,
      govt: -5,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Aksi militer yang dilakukan oleh negara penting untuk menjaga keutuhan negara.',
    },
    effect: {
      econ: 0,
      dipl: -10,
      govt: -10,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Saya mendukung perserikatan regional, seperti Uni Eropa.',
    },
    effect: {
      econ: -5,
      dipl: 10,
      govt: 10,
      scty: 5,
    },
  },
  {
    question: { id: 'Penting untuk memelihara kedaulatan negara.' },
    effect: {
      econ: 0,
      dipl: -10,
      govt: -5,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Perserikatan pemerintah dunia akan menguntungkan bagi umat manusia.',
    },
    effect: {
      econ: 0,
      dipl: 10,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Lebih penting untuk menjaga hubungan damai daripada meningkatkan kekuatan negara.',
    },
    effect: {
      econ: 0,
      dipl: 10,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: { id: 'Perang tidak perlu terjadi di negara lain.' },
    effect: {
      econ: 0,
      dipl: -10,
      govt: -10,
      scty: 0,
    },
  },
  {
    question: { id: 'Pengeluaran militer hanya membuang-buang uang.' },
    effect: {
      econ: 0,
      dipl: 10,
      govt: 10,
      scty: 0,
    },
  },
  {
    question: { id: 'Bantuan internasional hanya membuang-buang uang.' },
    effect: {
      econ: -5,
      dipl: -10,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: { id: 'Negaraku sangat hebat.' },
    effect: {
      econ: 0,
      dipl: -10,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Penelitian seharusnya dilakukan dalam skala internasional.',
    },
    effect: {
      econ: 0,
      dipl: 10,
      govt: 0,
      scty: 10,
    },
  },
  {
    question: {
      id: 'Pemerintah seharusnya bertanggung jawab kepada komunitas internasional.',
    },
    effect: {
      econ: 0,
      dipl: 10,
      govt: 5,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Bahkan ketika protes pada pemerintah yang otoriter, kekerasan tidak dapat diterima.',
    },
    effect: {
      econ: 0,
      dipl: 5,
      govt: -5,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Nilai-nilai agamaku seharusnya disebarkan sebanyak mungkin.',
    },
    effect: {
      econ: 0,
      dipl: -5,
      govt: -10,
      scty: -10,
    },
  },
  {
    question: {
      id: 'Nilai-nilai bangsaku seharusnya disebarkan sebanyak mungkin.',
    },
    effect: {
      econ: 0,
      dipl: -10,
      govt: -5,
      scty: 0,
    },
  },
  {
    question: { id: 'Sangat penting untuk memelihara hukum dan ketertiban.' },
    effect: {
      econ: 0,
      dipl: -5,
      govt: -10,
      scty: -5,
    },
  },
  {
    question: { id: 'Masyarakat umum membuat keputusan yang buruk.' },
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    question: { id: 'Bunuh diri yang dibantu dokter seharusnya legal.' },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Pengorbanan pada kebebasan sipil penting untuk menjaga kita dari serangan terorisme.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Pengawasan pemerintah diperlukan pada dunia yang modern.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Keberadaan negara merupakan ancaman pada kebebasan kita.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Apapun pandangan politikmu, penting untuk berpihak pada negaramu.',
    },
    effect: {
      econ: 0,
      dipl: -10,
      govt: -10,
      scty: -5,
    },
  },
  {
    question: { id: 'Semua otoritas harus dipertanyakan.' },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 5,
    },
  },
  {
    question: { id: 'Negara yang hierarkis adalah yang terbaik.' },
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Penting bagi pemerintah untuk mengikuti pendapat masyarakat, meskipun itu salah.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 0,
    },
  },
  {
    question: { id: 'Semakin kuat kepemimpinan, semakin bagus.' },
    effect: {
      econ: 0,
      dipl: -10,
      govt: -10,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Demokrasi itu lebih dari sekadar proses pengambilan keputusan.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 0,
    },
  },
  {
    question: { id: 'Peraturan mengenai lingkungan sangat penting.' },
    effect: {
      econ: 5,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    question: {
      id: 'Dunia yang lebih baik akan datang dari otomasi, sains dan teknologi.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    question: {
      id: 'Anak-anak seharusnya diberikan pendidikan tentang nilai agama atau tradisi.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: -5,
      scty: -10,
    },
  },
  {
    question: { id: 'Tradisi tidak bernilai dari tradisi itu sendiri.' },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    question: { id: 'Agama harus berperan dalam pemerintahan.' },
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: -10,
    },
  },
  {
    question: {
      id: 'Rumah ibadah harus dikenakan pajak dengan cara yang sama seperti lembaga atau institusi lain.',
    },
    effect: {
      econ: 5,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    question: {
      id: 'Perubahan iklim saat ini adalah ancaman terbesar pada kehidupan kita.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    question: {
      id: 'Penting jika kita bekerja sama sebagai dunia yang bersatu untuk melawan perubahan iklim.',
    },
    effect: {
      econ: 0,
      dipl: 10,
      govt: 0,
      scty: 10,
    },
  },
  {
    question: {
      id: 'Masyarakat di masa lalu lebih baik daripada masa sekarang.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: -10,
    },
  },
  {
    question: { id: 'Penting untuk memelihara tradisi dari masa lalu.' },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: -10,
    },
  },
  {
    question: {
      id: 'Penting bagi kita untuk berpikir jangka panjang, bahkan di luar rentang hidup kita.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    question: {
      id: 'Nalar atau akal lebih penting daripada mempertahankan budaya kita.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    question: {
      id: 'Penggunaan narkoba harus dilegalkan atau di dekriminalisasi.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 2,
    },
  },
  {
    question: { id: 'Pernikahan sesama jenis seharusnya legal.' },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 10,
      scty: 10,
    },
  },
  {
    question: {
      id: 'Tidak ada kebudayaan yang lebih superior dibanding budaya lainnya.',
    },
    effect: {
      econ: 0,
      dipl: 10,
      govt: 5,
      scty: 10,
    },
  },
  {
    question: { id: 'Seks pra nikah adalah hal yang tidak bermoral.' },
    effect: {
      econ: 0,
      dipl: 0,
      govt: -5,
      scty: -10,
    },
  },
  {
    question: {
      id: 'Jika kita menerima imigran, penting bagi mereka untuk berasimilasi dengan budaya kita.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: -5,
      scty: -10,
    },
  },
  {
    question: {
      id: 'Aborsi seharusnya dilarang pada kasus dan kondisi apapun.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: -10,
    },
  },
  {
    question: {
      id: 'Kepemilikan senjata api seharusnya dilarang bagi yang tidak memiliki alasan valid.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Saya mendukung sekali bayar dan layanan kesehatan yang universal.',
    },
    effect: {
      econ: 10,
      dipl: 0,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: { id: 'Prostitusi seharusnya ilegal.' },
    effect: {
      econ: 0,
      dipl: 0,
      govt: -10,
      scty: -10,
    },
  },
  {
    question: { id: 'Memelihara nilai-nilai keluarga adalah hal penting.' },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: -10,
    },
  },
  {
    question: {
      id: 'Mengejar kemajuan atau progres dengan cara apa pun itu berbahaya.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: -10,
    },
  },
  {
    question: {
      id: 'Modifikasi genetik adalah hal yang baik, bahkan pada manusia.',
    },
    effect: {
      econ: 0,
      dipl: 0,
      govt: 0,
      scty: 10,
    },
  },
  {
    question: { id: 'Kita harus membuka perbatasan kita untuk imigran.' },
    effect: {
      econ: 0,
      dipl: 10,
      govt: 10,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Pemerintah harus memperhatikan orang asing seperti halnya warga negara mereka sendiri.',
    },
    effect: {
      econ: 0,
      dipl: 10,
      govt: 0,
      scty: 0,
    },
  },
  {
    question: {
      id: 'Penting bagi kita untuk memajukan tujuan golongan kita di atas yang lainnya.',
    },
    effect: {
      econ: -10,
      dipl: -10,
      govt: -10,
      scty: -10,
    },
  },
  {
    question: {
      id: 'Semua orang - terlepas dari faktor seperti budaya atau seksualitas - harus diperlakukan adil dan derajat yang sama.',
    },
    effect: {
      econ: 10,
      dipl: 10,
      govt: 10,
      scty: 10,
    },
  },
];

export default questions;
