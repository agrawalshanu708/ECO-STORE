import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

 export const products = [
  //dell

  {
  _id: uuid(),
  "tittle": "Dell",
  "description": "DELL Ryzen 5 Hexa Core AMD R5-5600H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050/120 Hz) G15-5515 Gaming Laptop  (15.6 inch, Grey, 2.57 kg, WithMS  ice)",
  "price":"₹70,890",
  "category":"Gaming Laptop",
  "processor":"Ryzen 5 Hexa Core",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,02,522",
  "discount":"30" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/l0zm64w0/computer/e/g/8/g15-5515-gaming-laptop-dell-original-imagcnty69nhzy58.jpeg?q=70",
  "rating":{
      "rate" : 2,
      "count":5
}},

{
  _id: uuid(),
  "tittle": "Dell",
  "description": "DELL Ryzen 5 Hexa Core AMD R5-6600H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) G15-5525 Gaming Laptop  (15.6 Inch, Phantom Grey With Speckles, 2.51 Kg, With MS  ice)",
  "price":"₹86,890,",
  "category":"Gaming Laptop",
  "processor":"Ryzen 5 Hexa Core",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,12,802",
  "discount":"22" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/l45xea80/computer/7/5/r/g15-5525-gaming-laptop-dell-original-imagf4haxvzux68z.jpeg?q=70",
  "rating":{
      "rate" : 2,
      "count":5
}},
  
{
  _id: uuid(),
  "tittle": "Dell",
  "description": "DELL Core i7 12th Gen - (16 GB/512 GB SSD/Windows 11 Home) Inspiron 5320 Laptop  (13.3 inch, Platinum Silver, With MS  ice))",
  "price":"₹94,890,",
  "category":"Business Laptop",
  "processor":"Core i7 12th Gen",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,12,400",
  "discount":"15" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/k/h/i/inspiron-laptop-dell-original-imagg9xubhhumghg.jpeg?q=70",
  "rating":{
      "rate" : 3,
      "count":5
}},
{
  _id: uuid(),
  "tittle": "Dell",
  "description": "DELL Inspiron Core i5 12th Gen - (8 GB/512 GB SSD/Windows 11 Home/2 GB Graphics) Inspiron 5518 Thin and Light Laptop  (15.6 inch, Platinum Silver, 1.8 kg, With MS  ice)",
  "price":"₹70,890,",
  "category":"Business Laptop",
  "processor":"Core i5 12th Gen",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹74,990",
  "discount":"15" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/l58iaa80/computer/q/s/w/inspiron-3511-laptop-dell-original-imagfycrbnpu2nbh.jpeg?q=70",
  "rating":{
      "rate" : 4,
      "count":5
}},

{
_id: uuid(),
"tittle": "Dell",
"description": "DELL Core i7 12th Gen - (16 GB/512 GB SSD/Windows 11 Home) Inspiron 5320 Thin and Light Laptop  (13.3 Inch, Platinum Silver, 1.25 Kg, With MS  ice)",
"price":"₹84,890,",
"category":"Business Laptop",
"processor":"Core i7 12th Gen",
 "qty" : 1,
"new_arrival":true,
"original_price":"₹99,490",
"discount":"14" ,
"image":"https://rukminim1.flixcart.com/image/416/416/l58iaa80/computer/q/s/w/inspiron-3511-laptop-dell-original-imagfycrbnpu2nbh.jpeg?q=70",
"rating":{
    "rate" : 2,
    "count":5
}},

{
_id: uuid(),
"tittle": "HP",
"description": "HP Envy Core i7 11th Gen - (16 GB/512 GB SSD/Windows 11 Home) 13-bd1003TU Thin and Light Laptop  (13.3 inch, Natural Silver, 1.30 Kg, With MS  ice",
"price":"₹1,05,900,",
"category":"Business Laptop",
"processor":"Core i7 12th Gen",
 "qty" : 1,
"new_arrival":true,
"original_price":"₹1,24,533",
"discount":"14" ,
"image":"https://rukminim1.flixcart.com/image/416/416/l26hdow0/computer/p/6/b/13-bd1003tu-thin-and-light-laptop-hp-original-imagdkzmzxdjuc9h.jpeg?q=70",
"rating":{
    "rate" : 3,
    "count":5
}},

{
 _id: uuid(),
"tittle": "HP",
"description": "HP Spectre Core i7 12th Gen - (16 GB/1 TB SSD/Windows 11 Home) ef0054TU Notebook  (13.5 inch, Nocturne Blue, 1.34 kg, With MS  ice)",
"price":"₹1,49,890,",
"category":"Business Laptop",
"processor":"Core i7 12th Gen",
 "qty" : 1,
"new_arrival":true,
"original_price":"₹1,68,617",
"discount":"11" ,
"image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/h/s/n/spectre-x360-13-notebook-hp-original-imagg4fa4ng9axqx.jpeg?q=70",
"rating":{
    "rate" : 1,
  "count":5
}},

  
{
  "tittle": "HP",
  _id: uuid(),
  "description": "HP Core i7 12th Gen - (16 GB/1 TB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX RTX 3050 4GB Graphics) 16-B1350TX Gaming Laptop  (16.1 inch, Shadow Black, With MS  ice)",
  "price":"₹1,21,900,",
  "category":"Gaming Laptop",
  "processor":"Core i7 12th Gen",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,48,990",
  "discount":"18" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/h/h/m/16-b1350tx-gaming-laptop-hp-original-imagg7hutkwfyrwq.jpeg?q=70",
  "rating":{
      "rate" : 2,
      "count":5
  }},
  

{
  _id: uuid(),
  "tittle": "HP",
  "description": "HP Victus Ryzen 7 Octa Core 5800H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) 15-fb0052AX Gaming Laptop  (15.6 Inch, Mica Silver, 2.37 Kg, With MS  ice))",
  "price":"₹84,390",
  "category":"Gaming Laptop",
  "processor":"Core i7 12th Gen",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹93,197",
  "discount":"9" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/l5bd5zk0/computer/l/e/k/15-fb0040ax-gaming-laptop-hp-original-imaggyuezf9qtypd.jpeg?q=70",
  "rating":{
      "rate" : 3,
      "count":5
  }},
  
{
  _id: uuid(),
  "tittle": "HP",
  "description": "HP HP ZBook Firefly Core i7 11th Gen - (16 GB/1 TB SSD/Windows 10 Home) ZBook Firefly 15U G7 Notebook  (15.6 inch, Black)",
  "price":"₹99,900",
  "category":" Business Laptop",
  "processor":"Core i7 12th Gen",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,59,251",
  "discount":"37" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/l5bd5zk0/computer/l/e/k/15-fb0040ax-gaming-laptop-hp-original-imaggyuezf9qtypd.jpeg?q=70",
  "rating":{
      "rate" : 5,
      "count":5
  }},
  
{
  _id: uuid(),
  "tittle": "ASUS",
  "description": "ASUS Ryzen 7 Dual Core 10th Gen - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics) FA577RE-HN055WS Laptop  (15.6 inch, Jaeger Gray, With MS  ice)",
  "price":"₹94,479",
  "category":"Gaming Laptop",
  "processor":"Ryzen 7 Dual Core",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,41,990",
  "discount":"31" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/b/s/f/fa577re-hn055ws-laptop-asus-original-imaggc4w6ydyrur8.jpeg?q=70",
  "rating":{
      "rate" : 4,
      "count":5
  }},

{
  _id: uuid(),
  "tittle": "ASUS",
  "description": "ASUS Ryzen 7 Quad Core 10th Gen - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX NVIDIA® GeForce® GTX 1650) M6500QH-HN702WS Gaming Laptop  (15.6 inch, Quiet Blue, With MS  ice)",
  "price":"₹82,400",
  "category":" Business Laptop",
  "processor":"Ryzen 7 Quad Core",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹88,990",
  "discount":"7" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/m/j/l/k6500ze-l501ws-laptop-asus-original-imaghzudrgbzghbt.jpeg?q=70",
  "rating":{
      "rate" : 2,
      "count":5
  }},
{
  _id: uuid(),
  "tittle": "ASUS",
  "description": "ASUS ROG Flow X16 (2022) with 90Whr Battery Ryzen 9 Octa Core 6900HS - (16 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/AMD Radeon Radeon 680M) GV601RM-M5039WS 2 in 1 Gaming Laptop  (16 Inch, Eclipse Gray, 2.10 kg, With MS  ice)",
  "price":"₹99,900",
  "category":" Business Laptop",
  "processor":"Ryzen 9 Octa Core",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹2,11,890",
  "discount":"16" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/n/i/m/gv601rm-m5039ws-2-in-1-gaming-laptop-asus-original-imaggvdunhtwfxkh.jpeg?q=70",
  "rating":{
      "rate" : 5,
      "count":5
  }},

{
  _id: uuid(),
  "tittle": "ASUS",
  "description": "ASUS ROG Zephyrus G15 (2022) with 90Whr Battery Ryzen 9 Octa Core 6900HS - (16 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/AMD Radeon Radeon/165 Hz) GA503RM-HQ057WS Gaming Laptop  (15.6 Inch, Moonlight White, 1.90 kg, With MS  ice)",
  "price":"₹1,59,890",
  "category":" Gameing Laptop",
  "processor":"Ryzen 9 Octa Core ",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹2,04,990",
  "discount":"22" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/q/c/0/ga503rm-hq057ws-gaming-laptop-asus-original-imagghnawsf7mvec.jpeg?q=70",
  "rating":{
      "rate" : 4,
      "count":5
  }},  


  {
  _id: uuid(),
  "tittle": "ASUS",
  "description": "ASUS TUF Dash F15 Core i7 12th Gen - (16 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 3070) FX517ZR-HQ030WS Gaming Laptop  (15.6 inch,   Black, 2 Kg, With MS  ice)",
  "price":"₹1,49,890",
  "category":" Business Laptop",
  "processor":"Core i7 12th Gen",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,88,990",
  "discount":"20" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/l572ufk0/computer/r/n/k/fx517zc-hn108ws-gaming-laptop-asus-original-imagfxj5nfwkg5s7.jpeg?q=70",
  "rating":{
      "rate" : 4,
      "count":5
  }},
{
  _id: uuid(),
  "tittle": "MSI",
  "description": "MSI Core i9 12th Gen - (32 GB/2 TB SSD/Windows 11 Home/16 GB Graphics/NVIDIA GeForce RTX 3080 Ti/120 Hz) Raider GE77HX 12UHS-205IN Gaming Laptop  (17.3 Inch, Titanium Dark Grey, 2.9 Kg)",
  "price":"₹3,90,890",
  "category":" Business Laptop",
  "processor":"Core i7 12th Gen",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹4,81,990",
  "discount":"18" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/8/l/c/raider-ge77hx-12uhs-205in-gaming-laptop-msi-original-imaghffpfubseq3n.jpeg?q=70",
  "rating":{
      "rate" : 5,
      "count":5
  }},
{
  _id: uuid(),
  "tittle": "MSI",
  "description": "MSI Stealth GS66 Core i7 12th Gen - (32 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 3070Ti/240 Hz) GS66 12UGS Gaming Laptop  (15.6 inch, Core Black, 2.1 kg)",
  "price":"₹2,85,890",
  "category":" Gameing Laptop",
  "processor":"Core i7 12th Gen",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹3,13,990",
  "discount":"8" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/m/h/r/gs66-12ugs-gaming-laptop-msi-original-imaghcps9hxybhzg.jpeg?q=70",
  "rating":{
      "rate" : 4,
      "count":5
  }},
{
  _id: uuid(),
  "tittle": "MSI",
  "description": "MSI Creator Z16P Core i7 12th Gen - (32 GB/2 TB SSD/Windows 11 Pro/8 GB Graphics/NVIDIA GeForce RTX 3070Ti/165 Hz) Creator Z16P B12UGST Creator Laptop  (16 inch, Lunar Gray, 2.39 kg)",
  "price":"₹3,09,890",
  "category":" Business Laptop",
  "processor":"Core i7 12th Gen",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹3,35,990",
  "discount":"7" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/c/u/3/creator-z16p-b12ugst-creator-laptop-msi-original-imaghf34smsvgdwj.jpeg?q=70",
  "rating":{
      "rate" : 4,
      "count":5
  }},
{
  _id: uuid(),
  "tittle": "MSI",
  "description": "MSI Core i7 12th Gen - (16 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 3070/165 Hz) Crosshair 15 B12UGZ-1012IN Gaming Laptop  (15.6 Inch, Black, 2.47 Kg))",
  "price":"₹1,39,890",
  "category":" Gameing Laptop",
  "processor":"Core i7 12th Gen",
   "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,78,990",
  "discount":"22" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/l2qhjm80/computer/p/i/1/crosshair-15-b12uez-gaming-laptop-msi-original-imageymuhhs7djjf.jpeg?q=70",
  "rating":{
      "rate" : 2,
      "count":5
  }},


  {
  _id: uuid(),
  "tittle": "MSI",
  "description": "MSI Sword 15 Core i5 12th Gen - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050 Ti/144 Hz) Sword 15 A12UD-471IN Gaming Laptop  (15.6 Inch, White, 2.25 Kg)",
  "price":"₹86,390",
  "category":" Business Laptop",
  "processor":"Core i5 12th Gen",
  "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,11,990",
  "discount":"22" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/l2qhjm80/computer/n/t/g/sword-15-a12ud-gaming-laptop-msi-original-imageymchyn4ypgz.jpeg?q=70",
  "rating":{
      "rate" : 4,
      "count":5
  }},

  {
  _id: uuid(),
  "tittle": "MacBook AIR M2",
  "description": "APPLE 2022 MacBook AIR M2 - (8 GB/512 GB SSD/Mac OS Monterey) MLY03HN/A  (13.6 Inch, Silver, 1.24 kg)",
  "price":"₹1,49,800",
  "category":" Business Laptop",
  "processor":"M2 chip",
  "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,49,990",
  "discount":"0" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/l4hcx3k0/computer/5/h/h/macbook-air-thin-and-light-laptop-apple-original-imagfdfew8gszzhk.jpeg?q=70",
  "rating":{
      "rate" : 5,
      "count":5
  }},


  {
  _id: uuid(),
  "tittle": "MacBook AIR M1",
  "description": "APPLE MacBook Air M1 - (16 GB/512 GB SSD/Mac OS Big Sur) Z124J002KD  (13.3 inch, Space Grey, 1.29 Kg)",
  "price":"₹1,32,800",
  "category":" Business Laptop",
  "processor":"M1 chip",
  "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,32,900",
  "discount":"0" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/kyt0ya80/computer/b/v/q/na-thin-and-light-laptop-apple-original-imagaygvkp7pjexm.jpeg?q=70",
  "rating":{
      "rate" : 5,
      "count":5
  }},

  {
  _id: uuid(),
  "tittle": "MacBook AIR M1 Max",
  "description": "APPLE 2021 Macbook Pro M1 Max - (32 GB/1 TB SSD/Mac OS Monterey) MK1H3HN/A  (16.2 inch, Silver, 2,2 kg)",
  "price":"₹3,09,890",
  "category":" Business Laptop",
  "processor":"M1 Max chip",
  "qty" : 1,
  "new_arrival":true,
  "original_price":"₹3,29,900",
  "discount":"6" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/g/z/q/mk1e3hn-a-laptop-apple-original-imag7yzmv57cvg3f.jpeg?q=70",
  "rating":{
      "rate" : 5,
      "count":5
  }},
 
   {
  _id: uuid(),
  "tittle": "MacBook AIR M1 Pro",
  "description": "APPLE 2021 Macbook Pro M1 Pro - (16 GB/1 TB SSD/Mac OS Monterey) MK193HN/A  (16.2 inch, Space Grey�, 2.1 kg)",
  "price":"₹2,40,890",
  "category":" Business Laptop",
  "processor":"M1 Pro chip",
  "qty" : 1,
  "new_arrival":true,
  "original_price":"₹2,59,900",
  "discount":"7" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/3/n/s/mk183hn-a-laptop-apple-original-imag7yzkbgbwvwq3.jpeg?q=70",
  "rating":{
      "rate" : 5,
      "count":5
  }},
 
   {
  _id: uuid(),
  "tittle": "Acer",
  "description": "acer Predator Helios 300 Core i9 12th Gen - (16 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3060) PH315-55/ PH315-55-99Z6 Gaming Laptop  (15.6 Inch, Abyssal Black)",
  "price":"₹1,47,899",
  "category":" Business Laptop",
  "processor":"core i9 12th Gen",
  "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,79,999",
  "discount":"17" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/y/e/o/ph315-55-gaming-laptop-acer-original-imaghffqychub2fr.jpeg?q=70",
  "rating":{
      "rate" : 4,
      "count":5
  }}, 

   {
  _id: uuid(),
  "tittle": "Acer",
  "description": "acer Aspire 7 Core i5 12th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) A715-51G Gaming Laptop  (15.6 Inch, Charcoal Black)",
  "price":"₹57,890",
  "category":" Business Laptop",
  "processor":" core i5 12th Gen",
  "qty" : 1,
  "new_arrival":true,
  "original_price":"₹88,999",
  "discount":"32" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/t/t/m/-original-imaghkcjwpmszxtg.jpeg?q=70",
  "rating":{
      "rate" : 4,
      "count":5
  }}, 

   {
  _id: uuid(),
  "tittle": "Acer",
  "description": "acer Predator Helios 300 Core i7 12th Gen - (16 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 3070 Ti) PH315-55 Gaming Laptop  (15.6 Inch, Abyssal Black, 2.6 KG)",
  "price":"₹1,90,390",
  "category":" Gameing Laptop",
  "processor":" core i7 12th Gen",
  "qty" : 1,
  "new_arrival":true,
  "original_price":"₹1,99,999",
  "discount":"4" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/l4ei1e80/computer/s/g/0/-original-imagfbayueskkhxg.jpeg?q=70",
  "rating":{
      "rate" : 4,
      "count":5
  }}, 

    {
  _id: uuid(),
  "tittle": "Acer",
  "description": "acer Predator Triton 500 SE Core i7 12th Gen - (32 GB/2 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 3070 Ti) PT516-52s Gaming Laptop  (16 Inch, Steel Grey, 2.4 KG, With MS  ice)",
  "price":"₹2,29,890",
  "category":" Gameing Laptop",
  "processor":" core i7 12th Gen",
  "qty" : 1,
  "new_arrival":true,
  "original_price":"₹2,49,999",
  "discount":"8" ,
  "image":"https://rukminim1.flixcart.com/image/416/416/l3lx8cw0/computer/s/t/b/pt516-52s-gaming-laptop-acer-original-imagep4hxjafezxf.jpeg?q=70",
  "rating":{
      "rate" : 4,
      "count":5
  }},
 ]