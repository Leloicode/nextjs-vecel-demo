// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    
    { 
      id: 1,
      name: 'Lê Lợi',
      address: "Quảng nam" 
    },
    {
      id: 2,
      name: 'Ngô Duy Hưng',
      address: "Thừa Thiên Huế"
    },
    {
      id: 3,
      name: 'Võ Thanh Nhật',
      address: "Thừa Thiên Huế"
    }
    
    )
}
