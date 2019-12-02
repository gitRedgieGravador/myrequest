<template>
    <div class='result_part'>
      <div v-for='request in requests' v-bind:key="request.firstname">
    <Request v-bind:batch="request.batch"
            v-bind:category="request.category"
            v-bind:firstname="request.firstname"
            v-bind:lastname="request.lastname"
            v-bind:what="request.what"
            v-bind:when="request.when"
            v-bind:why="request.why"
            v-bind:status="request.status"
            v-bind:statusDate="request.statusDate"
            v-bind:dateOfSubmit="request.dateOfSubmit"
    />
      </div>
    </div>

</template>

<script>
import Request from "../components/RequestContainer.vue";
export default {
  name: "Request",
  components: { Request },
  data: () => ({
    requests: [
      {
        batch: 2021,
        category: "Academic",
        firstname: "Mary Grace",
        lastname: "Tiburillo",
        email: "mary@gmail.com",
        what: "ndfjkdfhd djfhdjfh dfhjkdfh jdfh dhfjd kdfhdfjy jhfjdfh ",
        when: "December 10, 2019",
        why: "djfhjdkhf dhfjhd gdfjhjd df f fdfhd dfhdf dfgdjf djfhjdfhdf ",
        status: "unread",
        statusDate: "sds",
        dateOfSubmit: "November 29, 2019"
      },
            {
        batch: 2021,
        category: "Academic",
        firstname: "Mary",
        lastname: "Tiburillo",
        email: "mary@gmail.com",
        what: "ndfjkdfhd djfhdjfh dfhjkdfh jdfh dhfjd kdfhdfjy jhfjdfh ",
        when: "December 10, 2019",
        why: "djfhjdkhf dhfjhd gdfjhjd df f fdfhd dfhdf dfgdjf djfhjdfhdf ",
        status: "unread",
        statusDate: "sds",
        dateOfSubmit: "November 29, 2019"
      },
    ]
  })
};
</script>

