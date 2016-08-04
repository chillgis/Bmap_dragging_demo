//中心点坐标
var estateJsonStr = [
  {
    "buildingId": "0705280229021824977FE8318D179397", 
    "name": "天山河畔花园",
    "address": "水城路883弄/长宁路",
    "x": "31.221034",
    "y": "121.397223",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg"
  }
];

//建筑物坐标信息
var buildingJsonStr=
[
  {
    "buildingId": "0710101842282A67E3162603F6250D67",
    "name": "02",
    "x": "31.22127",
    "y": "121.398516",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "07101018422820AD64EAB3AC576FFD3E",
    "name": "03",
    "x": "31.221587",
    "y": "121.397745",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "07101018422845B31172C77A176BDB43",
    "name": "04",
    "x": "31.220695",
    "y": "121.39827",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228A7EF4B0094030694C1B5",
    "name": "05",
    "x": "31.220769",
    "y": "121.397956",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228057205C5220A4924B99F",
    "name": "06",
    "x": "31.220178",
    "y": "121.398149",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "07101018422891C6FB5F3838EA67AEB6",
    "name": "07",
    "x": "31.220236",
    "y": "121.397776",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228E99A96B62460853A93B0",
    "name": "08",
    "x": "31.220576",
    "y": "121.397269",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228F4A035D852D89F418667",
    "name": "09",
    "x": "31.220638",
    "y": "121.396932",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228869C8C3AA796DB2D6A17",
    "name": "10",
    "x": "31.22051",
    "y": "121.39633",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "0710101842288CD20D0E333F3D775AEE",
    "name": "11",
    "x": "31.220634",
    "y": "121.395917",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228465B808DF2361EF74872",
    "name": "12",
    "x": "31.221186",
    "y": "121.396132",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "07101018422876B9BD4DD764214A37EF",
    "name": "13",
    "x": "31.221151",
    "y": "121.396478",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "07101018422860A7AEE993AD2F3D254E",
    "name": "14",
    "x": "31.221923",
    "y": "121.396478",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228D993F7D6F104C6241EA0",
    "name": "15",
    "x": "31.221529",
    "y": "121.397035",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228C77408F277C2A0FFF9EA",
    "name": "16",
    "x": "31.222487",
    "y": "121.39682",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "07101018422850C5CEFCC37B745AE217",
    "name": "17",
    "x": "31.222155",
    "y": "121.397278",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228CE5998B16072B7EADAF0",
    "name": "18",
    "x": "31.222992",
    "y": "121.396829",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228C4AE0885ED1B1934CAC7",
    "name": "19",
    "x": "31.223008",
    "y": "121.397215",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228A28019A162C9F30FB412",
    "name": "20",
    "x": "31.223054",
    "y": "121.397745",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "071010184228BE86B8C490400D07A7D9",
    "name": "21",
    "x": "31.223039",
    "y": "121.398109",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "0710101842284F721F26E60E4AE38B78",
    "name": "22",
    "x": "31.223062",
    "y": "121.398702",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "07101018422835C890FA62A7AC3D7B4F",
    "name": "23",
    "x": "31.223077",
    "y": "121.399106",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "0710101842293A343A9B0EE1A2F87ED6",
    "name": "24",
    "x": "31.222533",
    "y": "121.398567",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "0710101842298447B5294F823BF14B2E",
    "name": "25",
    "x": "31.222128",
    "y": "121.398109",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  },
  {
    "buildingId": "07101018422905330D8B854F88DD30DD",
    "name": "26",
    "x": "31.221888",
    "y": "121.398769",
    "photo": "http://photo.l99.com/bigger/03/1366083318060_z24wf9.jpg",
    "address": "水城路883弄/长宁路"
  }
];
