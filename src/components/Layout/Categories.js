import './Categories.css'


const Categories = ({ categories, filterItems }) => {

  return (
    <div className="categories">
      <section className="category-section">
        {categories.map((category, index) => {
          return (
            <button className={category === 'All' ? 'category active' : 'category'} key={index} onClick={() => filterItems(category)}>{category}{category.icon}</button>
          )
        })}
      </section>
    </div>
  )
}

export default Categories