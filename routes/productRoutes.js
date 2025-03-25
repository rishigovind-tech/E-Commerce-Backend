const express=require("express")
const productController=require("../controller/productController")
const { verifyToken, verifyRole } = require("../middleware/authMiddleware");


const router=express.Router()

router.get("/products",verifyToken,verifyRole(["Admin", "User"]),productController.allProducts)
router.get("/products/:productId",productController.getProductsId)

router.post("/products",verifyToken,productController.addProduct)

router.put("/products/:productId",verifyToken,productController.updateProduct)

router.delete("/products/:productId",verifyToken,productController.deleteProduct)









module.exports=router;