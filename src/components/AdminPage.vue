<template>
  <div>
    <div style="height: 250px;"></div>
    <h1 style="font-size: 130px;">Welcome to Admin Page!</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Email</th>
          <!-- Thêm các cột khác nếu cần -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.fullName }}</td>
          <td>{{ user.email }}</td>
          <!-- Hiển thị thông tin khác của user nếu có -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data() {
    return {
      users: [] // Khởi tạo mảng để lưu thông tin người dùng từ API
    };
  },
  mounted() {
    this.fetchUsers(); // Gọi hàm để lấy thông tin người dùng khi component được mount
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch('https://6574e9bab2fbb8f6509cc787.mockapi.io/users');
        const data = await response.json();
        this.users = data; // Lưu thông tin người dùng từ API vào mảng users
      } catch (error) {
        console.error('Error fetching users', error);
      }
    }
  }
};
</script>

<style>
/* CSS cho bảng */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

thead {
  background-color: #f2f2f2;
}

th, td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f2f2f2;
}
</style>
