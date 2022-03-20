import React from 'react'

const ChatHome = () => {
  const username = localStorage.getItem('username')
  return (
    <div className="chat-grid-container">
      <div className="username-area">
        {username}
      </div>
      <div className="response-username-area">
        user
      </div>
      <div className="all-messages-area">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero commodi aliquam, nesciunt beatae hic et eligendi, quidem animi itaque ut quis delectus? Ad impedit reiciendis voluptatem quidem laborum ipsam est.
      </div>
      <div className="message-summ-area">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat veniam dolor illo incidunt eum voluptas ullam ipsam perspiciatis quo atque nostrum ex illum eveniet, accusamus sit sequi id, minima aspernatur modi nobis, harum eligendi! Perspiciatis consectetur repellendus est. Consectetur atque inventore hic quidem vitae, odit veritatis aspernatur blanditiis eveniet, ab aliquid fugit cumque corporis, ratione in? Pariatur ex aliquid harum exercitationem nostrum odio itaque, ratione dicta nobis? Recusandae dicta pariatur id atque enim rerum exercitationem quo! Corporis facere quos delectus, veritatis explicabo pariatur labore molestiae impedit blanditiis accusamus? Odit eum sit optio autem nostrum possimus illo architecto quidem nihil nisi beatae, minus cumque dolores veniam eos praesentium nulla. Itaque consequuntur sint, sequi eligendi neque incidunt facere magni quis voluptates esse laboriosam praesentium blanditiis delectus, ipsam corrupti fugiat doloribus alias temporibus asperiores rem provident quas distinctio inventore? Nisi modi aliquid reprehenderit autem sunt fugit voluptatibus eveniet porro ducimus! Molestiae, vero accusamus magnam quaerat minima rerum sunt dolorem minus quisquam atque voluptas quasi cumque! Tempore maiores nulla aliquam. Dolorem dolor eaque natus nulla officiis exercitationem facere reiciendis hic. Velit odio totam dolorum harum, placeat quisquam quasi nisi neque pariatur repudiandae voluptate amet beatae maiores non? Incidunt odio consequatur animi numquam temporibus.

      </div>
    </div>
  )
}

export default ChatHome