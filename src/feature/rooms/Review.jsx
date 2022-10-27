import Avatar from '../../components/Avatar'

function Review() {
  return (
    <div className="flex flex-col border-2 rounded-xl p-3">
      <div className="flex items-center mb-2">
        <Avatar hSize="h-10" wSize="w-10" />
        <div className="ml-3">
          <p className="font-medium">Hasanbasori Samang</p>
          <p className="font-thin text-sm">20 min ago</p>
        </div>
      </div>
      <div className="font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        nesciunt numquam aliquam eius ducimus? Cumque reiciendis, nam id
        perferendis aut itaque consequuntur quod excepturi fugiat accusantium
        asperiores reprehenderit consequatur quidem optio ex, inventore eos
        exercitationem illo obcaecati atque, nostrum debitis sunt maxime harum!
        Natus rerum, illo cum laboriosam non qui!
      </div>
    </div>
  )
}

export default Review
