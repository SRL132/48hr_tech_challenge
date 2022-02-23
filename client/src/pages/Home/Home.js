import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import withLayout from '../../components/HOC/withLayout'

import { fetchAllMemes, fetchAllGifs } from '../../redux/items/actions'

import CategoryFilterCheckBox from '../../components/atoms/CategoryFilterCheckBox'



function Home() {

  const items = useSelector(state => state.items)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllMemes())
    dispatch(fetchAllGifs())
  }, [dispatch])

  return (
    <div>
      <div>
        <h6>
          Filter by category
        </h6>
        <br />
        <CategoryFilterCheckBox value="alfa" /> Alfa <br />
        <CategoryFilterCheckBox value="beta" /> Beta <br />
      </div>
      <h4>Memes</h4>
      <br />
      <ul>
        {items.memesList ? items.memesList.map(item => (
          <li key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.name}</p>
            <p>{item.category}</p>
          </li>
        )) : <p>No Memes found</p>}
      </ul>
      <br />
      <h4>Gifs</h4>
      <br />
      <ul>
        {items.gifsList ? items.gifsList.map(item => (
          <li key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.name}</p>
            <p>{item.category}</p>
          </li>
        )) : <p>No Gifs found</p>}
      </ul>

    </div>
  )
}

export default withLayout(Home)