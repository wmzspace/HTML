import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Main {
	public static final String url = "jdbc:mysql://127.0.0.1/mysql"; // 本地库地址
	private final static String username = "root";// MySQL数据库登录用户名
	private final static String password = "wmz030907";// MySQL数据库登录密码

	public static void main(String args[]) {
		try {
			// 初始化并挂载 com.mysql.cj.jdbc.Driver 类，使能通过 DriverManager 类访问。
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Driver Establish Error!");
		}
		try {
			// 连接到 MySQL 
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306", username, password);
			// 获得一个类似于套接字的对象，实现与 MySQL 服务器之间互相收发信息
			Statement Controller = connection.createStatement();
			
			System.out.println("Connect Established Successfully\n");
			
			// 执行插入语句
			//Controller.execute("INSERT dbname.datename (name,type) VALUES ('Diva','None')");

			// 执行查询语句，返回值是一个 ResultSet 对象，是一个迭代器
			ResultSet ReturnedValues = Controller.executeQuery("SELECT * FROM mysql.user");

			// 打印查找结果
			System.out.printf("%-15s","Host");
			System.out.printf("%-15s", "User");
			System.out.println("");
			while (ReturnedValues.next()) {
				//int Age = ReturnedValues.getInt("age");
				String Host = ReturnedValues.getString("Host");
				String User = ReturnedValues.getString("User");
				System.out.printf("%-15s",Host);
				System.out.printf("%-15s",User);
				System.out.printf("\n");
			}
			System.out.println("\nOperate Successfully!");
			// 关闭连接
			Controller.close();
			connection.close();
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Connection Error!");
		}
	}
}
