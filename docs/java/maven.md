
## 命令使用
* 命令方式上传Jar

  ```
  mvn deploy:deploy-file -DgroupId="${groupId}" -DartifactId="${artifactId}" -Dversion="${version}" -Dpackaging=jar -Dfile="${filepath}" -Durl="${respository-url}" -DrepositoryId="${repositoryId}"
  ```
## 仓库信息
* 中央仓库地址

  ```
  Deploy snapshot artifacts into repository https://oss.sonatype.org/content/repositories/snapshots
  Deploy release artifacts into the staging repository https://oss.sonatype.org/service/local/staging/deploy/maven2
  Release staged artifacts into repository 'Releases'
  ```
## 依赖冲突
* Lombok 与 Mapstruct 同时使用使用 @Mapping 注解时出现字段找不到仅在使用 SpringBoot 时存在
  1. 如果 Lombok 1.18.6 或者更新的版本可以引入 lombok-mapstruct-binding
    
      ```xml
      <!-- 第一种引入方式:  -->
      <!--  -->
      <!-- 直接添加依赖 -->
      <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok-mapstruct-binding</artifactId>
      <version>${lombok-mapstruct-binding.version}</version>
      </dependency>

      <!-- 第二种引入方式: -->
      <properties>
          <mapstruct.version>1.4.1.Final</mapstruct.version>
          <lombok-mapstruct-binding.version>0.2.0</lombok-mapstruct-binding.version>
      </properties>
      <build>
          <pluginManagement>
              <plugins>
                  <!-- mapstruct 与 lombok 编译冲突导致@Mapping注解属性找不到 需要添加插件   -->
                  <plugin>
                      <groupId>org.apache.maven.plugins</groupId>
                      <artifactId>maven-compiler-plugin</artifactId>
                      <version>3.8.1</version>
                      <configuration>
                          <source>${java.version}</source>
                          <target>${java.version}</target>
                          <annotationProcessorPaths>
                              <path>
                                  <groupId>org.mapstruct</groupId>
                                  <artifactId>mapstruct-processor</artifactId>
                                  <version>${mapstruct.version}</version>
                              </path>
                              <path>
                                  <groupId>org.projectlombok</groupId>
                                  <artifactId>lombok</artifactId>
                                  <version>${lombok.version}</version>
                              </path>
                              <path>
                                  <groupId>org.projectlombok</groupId>
                                  <artifactId>lombok-mapstruct-binding</artifactId>
                                  <version>${lombok-mapstruct-binding.version}</version>
                              </path>
                          </annotationProcessorPaths>
                      </configuration>
                  </plugin>
              </plugins>
          </pluginManagement>
      </build>
      ```
  2. 如果低于 Lombok 1.18.6 则需要让 mapper 和 JavaBeans 放在两个独立的模块中,lombok 编译第一个模块运行, mapstruct 在第二个模块运行,意思就是 lombok 必须先与 mapstract 增加 JavaBeans
  3. 官方说 2018.1 之前需要添加 mapstruct-processor, 实际使用中2018.1 之后的版本仍需要添加 pom 的依赖,测试使用的是 SpringBoot 项目
