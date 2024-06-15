const customers = [
  'https://hanoicomputercdn.com/media/banner/06_Jul9876c9a3f300f29c8ee619765c1ad768.jpg',
  'https://hanoicomputercdn.com/media/banner/05_Julc7588853d975607658e9c3a1aa5a0dc0.jpg',
  'https://hanoicomputercdn.com/media/banner/05_Julfed1da6da79ca8f0cba2aa0c88e14d9e.jpg',
  'https://hanoicomputercdn.com/media/banner/01_Jul3571adc2900d18ca7bbb29ffef49e706.jpg',
  'https://hanoicomputercdn.com/media/banner/01_Jul4f7fcc45033f46b53db98b6c7db082d7.jpg',
  'https://hanoicomputercdn.com/media/banner/30_Jun129e458698c4745a32d44582161b51d8.jpg',
  'https://hanoicomputercdn.com/media/banner/30_Juneb935669c45405844c35aafbd5fe43d7.jpg',
  'https://hanoicomputercdn.com/media/banner/27_Juncf5793938b321b67b3b667655b375703.jpg',
  'https://hanoicomputercdn.com/media/banner/27_Junca538c343179bf0fbdfab6cd10469afd.jpg',
  'https://hanoicomputercdn.com/media/banner/26_June0e28452229af52e70f87dd03c3a30c2.jpg',
  'https://hanoicomputercdn.com/media/banner/26_Jun9414a8f5b810972c3c9a0e2860c07532.jpg',
  'https://hanoicomputercdn.com/media/banner/24_Junae566253288191ce5d879e51dae1d8c3.jpg',
  'https://hanoicomputercdn.com/media/banner/24_Jun8cda81fc7ad906927144235dda5fdf15.jpg',
  'https://hanoicomputercdn.com/media/banner/23_Jun032b2cc936860b03048302d991c3498f.jpg',
  'https://hanoicomputercdn.com/media/banner/23_Jun156005c5baf40ff51a327f1c34f2975b.jpg',
  'https://hanoicomputercdn.com/media/banner/12_Junf21f42faa90e8057646a028a55b6d54c.jpg',
  'https://hanoicomputercdn.com/media/banner/12_Jun8e7223bceeb9679592f839a9999e92c0.jpg',
  'https://hanoicomputercdn.com/media/banner/12_Junf7904209efa1a51b8c195e8b32348e65.jpg',
  'https://hanoicomputercdn.com/media/banner/12_Jun53ab92b2b929c6dbadca9bde222ac83d.jpg',
  'https://hanoicomputercdn.com/media/banner/09_Jun75d783f86b825604d83ce135fbceb778.jpg',
  'https://hanoicomputercdn.com/media/banner/09_Junf82229d75b685c4ca6148c161cfc65d7.jpg',
  'https://hanoicomputercdn.com/media/banner/09_Junfab2fa26066782277e15835e3bc5ed09.jpg',
  'https://hanoicomputercdn.com/media/banner/06_June4551c0c17cad5f7631485fe0d2c88ff.jpg',
  'https://hanoicomputercdn.com/media/banner/06_Juna2c33447c8ed3f628ed2765f1f9110e3.jpg',
  'https://hanoicomputercdn.com/media/banner/06_Jun2dbf257b5bf8ab14b10249b146ee9dd6.jpg',
  'https://hanoicomputercdn.com/media/banner/01_Juna78d8d8555da344e787499e20d945626.jpg',
  'https://hanoicomputercdn.com/media/banner/01_Junb30c0fe5787ac7b648cda424eae6f94a.jpg',
  'https://hanoicomputercdn.com/media/banner/01_Junbe27361b7d4309b25a9136d25f8e5c80.jpg',
  'https://hanoicomputercdn.com/media/banner/30_Mayda0af8492d9dae3a63d1ff5ac2e88a62.jpg',
  'https://hanoicomputercdn.com/media/banner/30_May67f5d3781d6f410010d8929fe84bec5f.jpg',
  'https://hanoicomputercdn.com/media/banner/30_Mayd07a1a6a6af0726ef656dc91aea1e601.jpg',
  'https://hanoicomputercdn.com/media/banner/30_May2b452e494025b6fa871c300b3f8b2d1d.jpg',
  'https://hanoicomputercdn.com/media/banner/30_May18efcb9f335fbc298110c130a53cffc2.jpg',
  'https://hanoicomputercdn.com/media/banner/30_Maye66d93a89b6103952c6bda95ccede29c.jpg',
  'https://hanoicomputercdn.com/media/banner/17_Maye725b004454a17285cdeabecede6b681.jpg',
  'https://hanoicomputercdn.com/media/banner/17_May9794773fc1368349b4f26068b3b354d2.jpg',
  'https://hanoicomputercdn.com/media/banner/17_Mayc8ae19018fa96488a87086e5b2de0cf6.jpg',
  'https://hanoicomputercdn.com/media/banner/17_May9796044e60cd3e43e0ebabd7090e80e2.jpg',
  'https://hanoicomputercdn.com/media/banner/17_May8c85cf4a5d4475537cd4c12706f2497e.jpg',
  'https://hanoicomputercdn.com/media/banner/17_May27ad1267463228e1d2ec2285ca8e89a1.jpg',
];

export const purchasedCustormers = customers.map((item, index) => {
  return {
    id: `customer-image-${index}`,
    image: item
  }
});