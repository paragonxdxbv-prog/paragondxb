"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit, Trash2, Save, X, MessageSquare, Search, XCircle } from "lucide-react"
import { ImageWithLoading } from "@/components/image-with-loading"
import { FirebaseAnalytics } from "@/components/firebase-analytics"
import { AdminAuth } from "@/components/admin-auth"
import { Navigation } from "@/components/navigation"
import { ChatInterface } from "@/components/chat-interface"
import { logEvent } from '@/lib/firebase-utils'
import { subscribeToProducts, addProduct, updateProduct, deleteProduct, getAboutContent, saveAboutContent, getCompanyRules, saveCompanyRules, getSocialMediaUrls, saveSocialMediaUrls, subscribeToCategories, saveCategories, subscribeToAnnouncement, saveAnnouncement, subscribeToAnalytics, subscribeToUsers, subscribeToAllTickets, closeTicket, type Announcement } from '@/lib/firebase-utils'

interface Product {
  id: string
  name: string
  price: string
  originalPrice?: string
  discountPercentage?: number
  category: string
  image: string
  images?: string[]
  description: string
  buyUrl?: string
}



export default function AdminPage() {
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState("products")
  const [users, setUsers] = useState<any[]>([]) // Users state
  const [aboutContent, setAboutContent] = useState({
    heroTitle: "",
    heroDescription: "",
    storyTitle: "",
    storyContent: [],
    missionTitle: "",
    missionContent: "",
    values: [
      { title: "INNOVATION", description: "We push the boundaries of fashion technology with AI-powered experiences and cutting-edge design." },
      { title: "COMMUNITY", description: "Building a global community of fashion enthusiasts who share our passion for style and innovation." },
      { title: "QUALITY", description: "Every product is crafted with the highest standards of quality, durability, and attention to detail." },
      { title: "SUSTAINABILITY", description: "Committed to sustainable fashion practices and reducing our environmental impact." }
    ]
  })
  const [companyRules, setCompanyRules] = useState<string[]>([])
  const [socialMedia, setSocialMedia] = useState({
    instagram: "https://instagram.com/paragondxb",
    youtube: "https://youtube.com/@paragondxb",
    tiktok: "https://tiktok.com/@paragondxb",
    discord: ""
  })
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    originalPrice: "",
    discountPercentage: "",
    category: "",
    image: "",
    images: [""],
    description: "",
    buyUrl: ""
  })
  // New States
  const [categories, setCategories] = useState<string[]>([])
  const [newCategory, setNewCategory] = useState("")
  const [announcement, setAnnouncement] = useState<Announcement>({
    enabled: false,
    text: "",
    backgroundColor: "#000000",
    textColor: "#FFFFFF"
  })
  const [analyticsData, setAnalyticsData] = useState<any>({ pageViews: {}, productViews: {}, totalViews: 0 })
  const [tickets, setTickets] = useState<any[]>([])
  const [selectedTicket, setSelectedTicket] = useState<any | null>(null)
  const [searchTicket, setSearchTicket] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [closingTicket, setClosingTicket] = useState(false)
  const ticketsPerPage = 5

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const unsubscribeProducts = subscribeToProducts((productsData) => {
      setProducts(productsData)
      setLoading(false)
    })

    const unsubscribeCategories = subscribeToCategories((cats) => {
      setCategories(cats)
    })

    const unsubscribeAnnouncement = subscribeToAnnouncement((data) => {
      setAnnouncement(data)
    })

    const unsubscribeAnalytics = subscribeToAnalytics((data) => {
      setAnalyticsData(data)
    })

    // Subscribe to Users
    const unsubscribeUsers = subscribeToUsers((usersData) => {
      setUsers(usersData)
    })

    // Subscribe to Tickets
    const unsubscribeTickets = subscribeToAllTickets((ticketsData) => {
      setTickets(ticketsData)
    })

    loadAboutContent()
    loadCompanyRules()
    loadSocialMediaUrls()

    return () => {
      unsubscribeProducts()
      unsubscribeCategories()
      unsubscribeAnnouncement()
      unsubscribeAnalytics()
      unsubscribeUsers()
    }
  }, [])

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return
    const updated = [...categories, newCategory.trim().toUpperCase()]
    await saveCategories(updated)
    setNewCategory("")
    alert("Category Added")
  }

  const handleDeleteCategory = async (category: string) => {
    if (confirm(`Delete category ${category}?`)) {
      const updated = categories.filter(c => c !== category)
      await saveCategories(updated)
    }
  }

  const handleSaveAnnouncement = async () => {
    await saveAnnouncement(announcement)
    alert("Announcement Saved")
  }



  const loadAboutContent = async () => {
    try {
      const content = await getAboutContent()
      if (content) {
        setAboutContent(prevContent => ({
          ...prevContent,
          ...content,
          values: content.values && content.values.length > 0 ? content.values : prevContent.values
        }))
      }
    } catch (error) {
      console.error('Error loading about content:', error)
    }
  }

  const loadCompanyRules = async () => {
    try {
      const rules = await getCompanyRules()
      if (rules && rules.length > 0) {
        setCompanyRules(rules)
      } else {
        const defaultRules = [
          "All products must meet our premium quality standards before listing",
          "Customer data privacy and security is our top priority",
          "We maintain sustainable and ethical sourcing practices",
          "Innovation and customer experience drive all our decisions",
          "We provide honest and transparent product descriptions"
        ]
        setCompanyRules(defaultRules)
      }
    } catch (error) {
      console.error('Error loading company rules:', error)
      const defaultRules = [
        "All products must meet our premium quality standards before listing",
        "Customer data privacy and security is our top priority",
        "We maintain sustainable and ethical sourcing practices",
        "Innovation and customer experience drive all our decisions",
        "We provide honest and transparent product descriptions"
      ]
      setCompanyRules(defaultRules)
    }
  }

  const loadSocialMediaUrls = async () => {
    try {
      const urls = await getSocialMediaUrls()
      setSocialMedia(urls)
    } catch (error) {
      console.error('Error loading social media URLs:', error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddProduct = () => {
    setEditingProduct(null)
    setFormData({
      name: "",
      price: "",
      originalPrice: "",
      discountPercentage: "",
      category: "",
      image: "",
      images: [""],
      description: "",
      buyUrl: ""
    })
    setShowForm(true)
    logEvent('admin_action', { action: 'add_product_form' })
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice || "",
      discountPercentage: product.discountPercentage?.toString() || "",
      category: product.category,
      image: product.image,
      images: product.images && product.images.length > 0 ? product.images : [product.image || ""],
      description: product.description,
      buyUrl: product.buyUrl || ""
    })
    setShowForm(true)
    logEvent('admin_action', { action: 'edit_product_form', product_id: product.id })
  }

  const handleSaveProduct = async () => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, formData)
        logEvent('admin_action', { action: 'update_product', product_id: editingProduct.id })
      } else {
        await addProduct(formData)
        logEvent('admin_action', { action: 'add_product' })
      }

      setShowForm(false)
      setEditingProduct(null)
      // Reset form data
      setFormData({
        name: "",
        price: "",
        originalPrice: "",
        discountPercentage: "",
        category: "",
        image: "",
        images: [""],
        description: "",
        buyUrl: ""
      })
      alert(editingProduct ? 'Product updated successfully!' : 'Product added successfully!')
    } catch (error) {
      console.error('Error saving product:', error)
      alert('Error saving product. Please try again.')
    }
  }

  const handleDeleteProduct = async (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(productId)
        logEvent('admin_action', { action: 'delete_product', product_id: productId })
      } catch (error) {
        console.error('Error deleting product:', error)
        alert('Error deleting product. Please try again.')
      }
    }
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingProduct(null)
    setFormData({
      name: "",
      price: "",
      originalPrice: "",
      discountPercentage: "",
      category: "",
      image: "",
      images: [""],
      description: "",
      buyUrl: ""
    })
  }

  const handleAddImageUrl = () => {
    setFormData(prev => ({
      ...prev,
      images: [...(prev.images || []), ""]
    }))
  }

  const handleRemoveImageUrl = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images?.filter((_, i) => i !== index) || [""]
    }))
  }

  const handleImageUrlChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images?.map((img, i) => i === index ? value : img) || [""]
    }))
  }

  const handleSaveAboutContent = async () => {
    try {
      await saveAboutContent(aboutContent)
      alert('About content saved successfully!')
      logEvent('admin_action', { action: 'save_about_content' })
    } catch (error) {
      console.error('Error saving about content:', error)
      alert('Error saving about content. Please try again.')
    }
  }

  const handleSaveCompanyRules = async () => {
    try {
      await saveCompanyRules(companyRules)
      alert('Company rules saved successfully!')
      logEvent('admin_action', { action: 'save_company_rules' })
    } catch (error) {
      console.error('Error saving company rules:', error)
      alert('Error saving company rules. Please try again.')
    }
  }

  const handleSaveSocialMedia = async () => {
    try {
      await saveSocialMediaUrls(socialMedia)

      logEvent('admin_save_social_media', {
        action: 'save_social_media',
        page: 'admin'
      })

      alert('Social media URLs saved successfully!')
    } catch (error) {
      console.error('Error saving social media URLs:', error)
      alert('Error saving social media URLs. Please try again.')
    }
  }

  return (
    <AdminAuth>
      <div
        className={`min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono transition-all duration-1000 ${isPageLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <FirebaseAnalytics />
        <Navigation isPageLoaded={isPageLoaded} currentPage="admin" />

        {/* Admin Header */}
        <div className="px-8 py-8 border-b-2 border-black dark:border-white bg-gray-50 dark:bg-black">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-widest uppercase mb-2">ADMIN PANEL</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wider">
                Manage your products, content, and settings
              </p>
            </div>
            {activeTab === "products" && (
              <Button
                onClick={handleAddProduct}
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 border-0 text-sm font-medium tracking-widest uppercase px-6 py-3 transition-all duration-300 hover:scale-105"
              >
                <Plus className="w-4 h-4 mr-2" />
                ADD PRODUCT
              </Button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <section className="px-8 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <div
              className={`flex border-b border-gray-200 dark:border-gray-700 mb-12 transition-all duration-700 ${isPageLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              style={{ transitionDelay: "300ms" }}
            >
              <button
                onClick={() => setActiveTab("products")}
                className={`px-6 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 ${activeTab === "products"
                  ? "border-b-2 border-black dark:border-white text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
              >
                PRODUCTS ({products.length})
              </button>
              <button
                onClick={() => setActiveTab("about")}
                className={`px-6 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 ${activeTab === "about"
                  ? "border-b-2 border-black dark:border-white text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
              >
                ABOUT PAGE
              </button>
              <button
                onClick={() => setActiveTab("rules")}
                className={`px-6 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 ${activeTab === "rules"
                  ? "border-b-2 border-black dark:border-white text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
              >
                COMPANY RULES
              </button>
              <button
                onClick={() => setActiveTab("social")}
                className={`px-6 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 ${activeTab === "social"
                  ? "border-b-2 border-black dark:border-white text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
              >
                SOCIAL MEDIA
              </button>
              <button
                onClick={() => setActiveTab("users")}
                className={`px-6 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 ${activeTab === "users"
                  ? "border-b-2 border-black dark:border-white text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
              >
                USERS
              </button>

              <button
                onClick={() => setActiveTab("chats")}
                className={`px-6 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 ${activeTab === "chats"
                  ? "border-b-2 border-black dark:border-white text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
              >
                CHATS
              </button>
            </div>


            {/* Product Form Modal */}
            {showForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-8 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium tracking-widest uppercase text-black dark:text-white">
                      {editingProduct ? 'EDIT PRODUCT' : 'ADD PRODUCT'}
                    </h2>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCancel}
                      className="border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        PRODUCT NAME
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter product name"
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-gray-900 text-black dark:text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                          CURRENT PRICE
                        </label>
                        <Input
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          placeholder="$180"
                          className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-gray-900 text-black dark:text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                          ORIGINAL PRICE (OPTIONAL)
                        </label>
                        <Input
                          name="originalPrice"
                          value={formData.originalPrice}
                          onChange={handleInputChange}
                          placeholder="$200"
                          className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-gray-900 text-black dark:text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                          DISCOUNT % (OPTIONAL)
                        </label>
                        <Input
                          name="discountPercentage"
                          value={formData.discountPercentage}
                          onChange={handleInputChange}
                          placeholder="10"
                          type="number"
                          className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                          CATEGORY
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white focus:outline-none text-sm bg-white dark:bg-white text-black dark:text-black"
                        >
                          <option value="">Select category</option>
                          {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        MAIN IMAGE URL
                      </label>
                      <Input
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        This will be the primary product image
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium tracking-widest uppercase text-black dark:text-white">
                          ADDITIONAL IMAGES (OPTIONAL)
                        </label>
                        <Button
                          type="button"
                          onClick={handleAddImageUrl}
                          size="sm"
                          className="bg-black text-white hover:bg-gray-800 text-xs"
                        >
                          <Plus className="w-3 h-3 mr-1" />
                          ADD IMAGE
                        </Button>
                      </div>
                      <div className="space-y-3">
                        {formData.images?.map((imageUrl, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={imageUrl}
                              onChange={(e) => handleImageUrlChange(index, e.target.value)}
                              placeholder={`Image URL ${index + 1}`}
                              className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black flex-1"
                            />
                            {formData.images && formData.images.length > 1 && (
                              <Button
                                type="button"
                                onClick={() => handleRemoveImageUrl(index)}
                                size="sm"
                                variant="outline"
                                className="border-red-300 text-red-600 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Add multiple images for product gallery. First image will be used if main image is empty.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        THE VIBE
                      </label>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter the vibe of this product..."
                        rows={4}
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-gray-900 text-black dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        BUY URL (OPTIONAL)
                      </label>
                      <Input
                        name="buyUrl"
                        value={formData.buyUrl}
                        onChange={handleInputChange}
                        placeholder="https://example.com/buy-product"
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        If provided, "BUY NOW" button will redirect to this URL
                      </p>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <Button
                        variant="outline"
                        onClick={handleCancel}
                        className="border-gray-300 text-gray-600 hover:bg-gray-100"
                      >
                        CANCEL
                      </Button>
                      <Button
                        onClick={handleSaveProduct}
                        className="bg-black text-white hover:bg-gray-800"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        {editingProduct ? 'UPDATE' : 'SAVE'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content */}
            {activeTab === "products" && (
              <>
                {/* Products Grid */}
                {loading ? (
                  <div className="text-center py-16">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-4"></div>
                    <p className="text-sm font-mono tracking-widest uppercase text-gray-500">LOADING PRODUCTS...</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                      <div
                        key={product.id}
                        className={`bg-white dark:bg-black border-2 border-black dark:border-white overflow-hidden hover:shadow-2xl transition-all duration-700 group ${isPageLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                          }`}
                        style={{ transitionDelay: `${600 + index * 100}ms` }}
                      >
                        <div className="relative w-full overflow-hidden mb-4">
                          <ImageWithLoading
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute top-2 right-2 flex space-x-2">
                            <Button
                              size="sm"
                              onClick={() => handleEditProduct(product)}
                              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 border-0 p-2 h-8 w-8"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleDeleteProduct(product.id)}
                              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 border-0 p-2 h-8 w-8"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="p-4 space-y-3">
                          <div>
                            <h3 className="text-sm font-bold tracking-wider uppercase">{product.name}</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-mono mt-1">{product.category}</p>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                            <span className="text-lg font-bold tracking-wide">{product.price}</span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {!loading && products.length === 0 && (
                  <div
                    className={`text-center py-16 border-2 border-dashed border-gray-300 dark:border-gray-700 transition-all duration-700 ${isPageLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-mono tracking-widest uppercase mb-6">
                      NO PRODUCTS FOUND
                    </p>
                    <Button
                      onClick={handleAddProduct}
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 border-0 text-sm font-medium tracking-widest uppercase px-8 py-3 transition-all duration-300 hover:scale-105"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      ADD FIRST PRODUCT
                    </Button>
                  </div>
                )}
              </>
            )}

            {/* About Page Content Management */}
            {activeTab === "about" && (
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-none">
                  <h2 className="text-xl font-medium tracking-widest uppercase mb-6">ABOUT PAGE CONTENT</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        HERO TITLE
                      </label>
                      <Input
                        value={aboutContent.heroTitle}
                        onChange={(e) => setAboutContent(prev => ({ ...prev, heroTitle: e.target.value }))}
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        HERO DESCRIPTION
                      </label>
                      <Textarea
                        value={aboutContent.heroDescription}
                        onChange={(e) => setAboutContent(prev => ({ ...prev, heroDescription: e.target.value }))}
                        rows={3}
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        STORY TITLE
                      </label>
                      <Input
                        value={aboutContent.storyTitle}
                        onChange={(e) => setAboutContent(prev => ({ ...prev, storyTitle: e.target.value }))}
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        STORY CONTENT (3 PARAGRAPHS)
                      </label>
                      {aboutContent.storyContent.map((paragraph, index) => (
                        <div key={index} className="mb-4">
                          <label className="block text-xs text-gray-500 dark:text-white mb-1">Paragraph {index + 1}</label>
                          <Textarea
                            value={paragraph}
                            onChange={(e) => {
                              const newStoryContent = [...aboutContent.storyContent]
                              newStoryContent[index] = e.target.value
                              setAboutContent(prev => ({ ...prev, storyContent: newStoryContent }))
                            }}
                            rows={3}
                            className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        MISSION TITLE
                      </label>
                      <Input
                        value={aboutContent.missionTitle}
                        onChange={(e) => setAboutContent(prev => ({ ...prev, missionTitle: e.target.value }))}
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        MISSION CONTENT
                      </label>
                      <Textarea
                        value={aboutContent.missionContent}
                        onChange={(e) => setAboutContent(prev => ({ ...prev, missionContent: e.target.value }))}
                        rows={4}
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-4 text-black dark:text-white">
                        OUR VALUES (4 VALUES)
                      </label>
                      {aboutContent?.values && aboutContent.values.length > 0 ? (
                        aboutContent.values.map((value, index) => (
                          <div key={index} className="mb-4">
                            <label className="block text-xs text-gray-500 dark:text-white mb-1">Value {index + 1}</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Input
                                placeholder="Title"
                                value={value.title}
                                onChange={(e) => {
                                  const newValues = [...aboutContent.values]
                                  newValues[index] = { ...newValues[index], title: e.target.value }
                                  setAboutContent((prev) => ({ ...prev, values: newValues }))
                                }}
                                className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-gray-800 text-black dark:text-white"
                              />
                              <Textarea
                                placeholder="Description"
                                value={value.description}
                                onChange={(e) => {
                                  const newValues = [...aboutContent.values]
                                  newValues[index] = { ...newValues[index], description: e.target.value }
                                  setAboutContent((prev) => ({ ...prev, values: newValues }))
                                }}
                                rows={2}
                                className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-gray-800 text-black dark:text-white"
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500 dark:text-white text-sm font-mono tracking-wider">
                            No values found. Add some values to display them.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-end">
                      <Button
                        onClick={handleSaveAboutContent}
                        className="bg-black text-white hover:bg-gray-800 border-0 text-xs font-medium tracking-widest uppercase px-6 py-2"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        SAVE ABOUT CONTENT
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Company Rules Management */}
            {activeTab === "rules" && (
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-none">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium tracking-widest uppercase">COMPANY RULES</h2>
                    <Button
                      onClick={() => setCompanyRules((prev) => [...prev, ""])}
                      className="bg-black text-white hover:bg-gray-800 border-0 text-xs font-medium tracking-widest uppercase px-4 py-2"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      ADD RULE
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {companyRules.map((rule, index) => (
                      <div key={index} className="mb-4">
                        <label className="block text-xs text-gray-500 dark:text-white mb-1">Rule {index + 1}</label>
                        <div className="flex gap-2">
                          <Textarea
                            value={rule}
                            onChange={(e) => {
                              const newRules = [...companyRules]
                              newRules[index] = e.target.value
                              setCompanyRules(newRules)
                            }}
                            rows={2}
                            className="flex-1 border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-gray-800 text-black dark:text-white"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const newRules = companyRules.filter((_, i) => i !== index)
                              setCompanyRules(newRules)
                            }}
                            className="border-red-300 dark:border-red-600 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button
                      onClick={handleSaveCompanyRules}
                      className="bg-black text-white hover:bg-gray-800 border-0 text-xs font-medium tracking-widest uppercase px-6 py-2"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      SAVE COMPANY RULES
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Social Media Management */}
            {activeTab === "social" && (
              <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-black p-6 rounded-none">
                  <h2 className="text-xl font-medium tracking-widest uppercase mb-6 text-black dark:text-white">SOCIAL MEDIA URLS</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        INSTAGRAM URL
                      </label>
                      <Input
                        value={socialMedia.instagram}
                        onChange={(e) => setSocialMedia(prev => ({ ...prev, instagram: e.target.value }))}
                        placeholder="https://instagram.com/paragondxb"
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        YOUTUBE URL
                      </label>
                      <Input
                        value={socialMedia.youtube}
                        onChange={(e) => setSocialMedia(prev => ({ ...prev, youtube: e.target.value }))}
                        placeholder="https://youtube.com/@paragondxb"
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        TIKTOK URL
                      </label>
                      <Input
                        value={socialMedia.tiktok}
                        onChange={(e) => setSocialMedia(prev => ({ ...prev, tiktok: e.target.value }))}
                        placeholder="https://tiktok.com/@paragondxb"
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium tracking-widest uppercase mb-2 text-black dark:text-white">
                        DISCORD URL
                      </label>
                      <Input
                        value={socialMedia.discord}
                        onChange={(e) => setSocialMedia(prev => ({ ...prev, discord: e.target.value }))}
                        placeholder="https://discord.gg/your-invite-code"
                        className="border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white bg-white dark:bg-white text-black dark:text-black"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button
                      onClick={handleSaveSocialMedia}
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 border-0 text-xs font-medium tracking-widest uppercase px-6 py-2"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      SAVE SOCIAL MEDIA
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Users Management */}
            {activeTab === "users" && (
              <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-black p-6 rounded-none">
                  <h2 className="text-xl font-medium tracking-widest uppercase mb-6 text-black dark:text-white">REGISTERED USERS ({users.length})</h2>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b-2 border-black dark:border-white">
                          <th className="p-4 text-xs font-bold tracking-widest uppercase text-black dark:text-white">User</th>
                          <th className="p-4 text-xs font-bold tracking-widest uppercase text-black dark:text-white">Email</th>
                          <th className="p-4 text-xs font-bold tracking-widest uppercase text-black dark:text-white">Status</th>
                          <th className="p-4 text-xs font-bold tracking-widest uppercase text-black dark:text-white">Last Seen</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                        {users.map((user) => (
                          <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                                  {user.photoURL ? (
                                    <img src={user.photoURL} alt={user.displayName} className="h-full w-full object-cover" />
                                  ) : (
                                    <div className="h-full w-full flex items-center justify-center text-xs font-bold text-gray-500">
                                      {user.displayName?.charAt(0) || "U"}
                                    </div>
                                  )}
                                </div>
                                <span className="font-medium text-sm text-black dark:text-white">{user.displayName || "Unknown User"}</span>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-gray-600 dark:text-gray-300 font-mono">{user.email}</td>
                            <td className="p-4">
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                ACTIVE
                              </span>
                            </td>
                            <td className="p-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
                              {user.lastSeen?.seconds ? new Date(user.lastSeen.seconds * 1000).toLocaleDateString() : 'N/A'}
                            </td>
                          </tr>
                        ))}
                        {users.length === 0 && (
                          <tr>
                            <td colSpan={4} className="p-8 text-center text-gray-500 dark:text-gray-400 function-mono">
                              NO USERS FOUND
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}



            {/* Categories Tab */}
            {activeTab === "categories" && (
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-white dark:bg-black p-8 border-2 border-black dark:border-white">
                  <h2 className="text-2xl font-bold mb-6 tracking-widest uppercase">Manage Categories</h2>
                  <div className="flex gap-4 mb-8">
                    <Input
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      placeholder="New Category Name"
                      className="uppercase"
                    />
                    <Button onClick={handleAddCategory} className="bg-black text-white hover:bg-gray-800">
                      <Plus className="w-4 h-4 mr-2" /> ADD
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <div key={cat} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800">
                        <span className="font-medium">{cat}</span>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteCategory(cat)} className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Site Control Tab */}
            {activeTab === "site_control" && (
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-white dark:bg-black p-8 border-2 border-black dark:border-white">
                  <h2 className="text-2xl font-bold mb-6 tracking-widest uppercase">Announcement Bar</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <label className="font-bold">ENABLE:</label>
                      <input
                        type="checkbox"
                        checked={announcement.enabled}
                        onChange={(e) => setAnnouncement({ ...announcement, enabled: e.target.checked })}
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">TEXT</label>
                      <Input
                        value={announcement.text}
                        onChange={(e) => setAnnouncement({ ...announcement, text: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2">BACKGROUND COLOR</label>
                        <div className="flex gap-2">
                          <Input
                            type="color"
                            value={announcement.backgroundColor}
                            onChange={(e) => setAnnouncement({ ...announcement, backgroundColor: e.target.value })}
                            className="w-12 h-10 p-1"
                          />
                          <Input
                            value={announcement.backgroundColor}
                            onChange={(e) => setAnnouncement({ ...announcement, backgroundColor: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">TEXT COLOR</label>
                        <div className="flex gap-2">
                          <Input
                            type="color"
                            value={announcement.textColor}
                            onChange={(e) => setAnnouncement({ ...announcement, textColor: e.target.value })}
                            className="w-12 h-10 p-1"
                          />
                          <Input
                            value={announcement.textColor}
                            onChange={(e) => setAnnouncement({ ...announcement, textColor: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                    <Button onClick={handleSaveAnnouncement} className="bg-black text-white hover:bg-gray-800 w-full mt-4">
                      SAVE ANNOUNCEMENT
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Chats Tab */}
            {activeTab === "chats" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[700px]">

                {/* Sidebar List */}
                <div className="md:col-span-1 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black p-4 flex flex-col">
                  <div className="mb-4 relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search chats..."
                      value={searchTicket}
                      onChange={(e) => setSearchTicket(e.target.value)}
                      className="pl-9 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                    />
                  </div>

                  <div className="space-y-2 overflow-y-auto flex-1">
                    {tickets
                      .filter(t => t.userName?.toLowerCase().includes(searchTicket.toLowerCase()) || t.productName?.toLowerCase().includes(searchTicket.toLowerCase()))
                      .map(ticket => (
                        <div
                          key={ticket.id}
                          onClick={() => setSelectedTicket(ticket)}
                          className={`p-4 border cursor-pointer transition-colors ${selectedTicket?.id === ticket.id
                            ? "border-black dark:border-white bg-white dark:bg-gray-900"
                            : "border-transparent hover:bg-white dark:hover:bg-gray-900 border-b-gray-200 dark:border-b-gray-800"
                            }`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-bold text-sm tracking-wide line-clamp-1">{ticket.userName || 'Guest'}</span>
                            <span className="text-[10px] text-gray-400">{ticket.lastMessageAt?.seconds ? new Date(ticket.lastMessageAt.seconds * 1000).toLocaleDateString() : ''}</span>
                          </div>
                          <p className="text-xs font-mono text-gray-500 mb-2 truncate">{ticket.subject}</p>
                          <div className="flex justify-between items-center">
                            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase ${ticket.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                              {ticket.status}
                            </span>
                            {ticket.type === 'order_request' && <span className="text-[10px] bg-black text-white px-1 font-bold">ORDER</span>}
                          </div>
                        </div>
                      ))}
                    {tickets.length === 0 && (
                      <p className="text-center text-gray-400 text-xs mt-10">No chats found.</p>
                    )}
                  </div>
                </div>

                {/* Chat Area */}
                <div className="md:col-span-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-black flex flex-col">
                  {selectedTicket ? (
                    <div className="flex flex-col h-full">
                      <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-zinc-950">
                        <div>
                          <h3 className="font-bold tracking-widest uppercase">{selectedTicket.subject}</h3>
                          <p className="text-xs text-gray-500">{selectedTicket.productName ? `Product: ${selectedTicket.productName}` : 'General Inquiry'}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold">{selectedTicket.userName}</p>
                          <p className="text-xs text-gray-400">{selectedTicket.userEmail}</p>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <ChatInterface ticketId={selectedTicket.id} isAdmin={true} />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <div className="text-center">
                        <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p className="text-sm tracking-widest uppercase">SELECT A CHAT TO VIEW</p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>
        </section>

        {/* Footer */}
        <footer
          className={`px-8 py-16 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-all duration-700 ${isPageLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold tracking-tighter mb-4">PARAGONDXB</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md leading-relaxed">
                Elevating the automotive lifestyle through premium content and exclusive digital assets.
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 dark:text-gray-500 text-xs font-mono tracking-widest uppercase">
                © 2026 PARAGONDXB, INC. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </AdminAuth>
  )
}
