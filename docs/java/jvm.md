## JVM性能调优 TODO
```
# java8 以前 应当设置 -XX:PermSize -XX:MaxPermSize
# java8 以后 应当设置 -XX:MaxMetaspaceSize -XX:MetaspaceSize

# 1. Java堆大小设置，Xms和Xmx设置为老年代存活对象的3-4倍，即FullGC之后的老年代内存占用的3-4倍
# 2. 永久代(元空间) PermSize和MaxPermSize / MetaspaceSize和MaxMetaspaceSize 设置为老年代存活对象的1.2-1.5倍。
# 3. 年轻代Xmn的设置为老年代存活对象的1-1.5倍。
# 4. 老年代的内存大小设置为老年代存活对象的2-3倍。

# 假如 jstat -gc 1234

OU 为 905371.7 900M

jvm配置为
-XX:MetaspaceSize=1536M -XX:MaxMetaspaceSize=1536M
-Xms4096m -Xmx4096m

-XX:MetaspaceSize=180M -XX:MaxMetaspaceSize=180M -Xms512m -Xmx512m

```
## 自行编译JDK
1. 编译参数设置
```ini
export LANG=C
export ALT_BOOTDIR=/usr/share/java
export ALLOW_DOWNLOADS=true
export HOTSPOT_BUILD_JOBS=8
export ALT_PARALLEL_COMPILE_JOBS=8
export SKIP_COMPARE_IMAGES=true
# 使用预编译头文件 编译加快
export USE_PRECOMPILED_HEADER=true
# 要编译的内容
export BUILD_LANGTOOLS=true
#export BUILD_JAXP=false
#export BUILD_JAXWS=false
#export BUILD_CORBA=false
export BUILD_HOTSPOT=true
export BUILD_JDK=true
#要编译的版本
#export SKIP_DEBUG_BUILD=false
#export SKIP_FASTDEBUG_BUILD=true
#export DEBUG_NAME=debug
#设置为false可以避开javaws和浏览器Java插件的build
export BUILD_DEPLOY=false
#设置为false不会build出安装包 安装包中有一些奇怪的依赖
export BUILD_INSTALL=false
export ALT_OUTPUTDIR=/home/ling/jdk/build
export DEBUG_BINARIES=true
#设置HotSpot编译为64位版本
export LP64=1

./configure --enable-debug 创建编译配置 不指定参数构建为release版本
```
2. 编译成功的提示
```shell
----- Build times -------
Start 2020-03-14 03:31:24
End   2020-03-14 03:44:35
00:00:48 corba
00:05:41 hotspot
00:00:43 jaxp
00:01:11 jaxws
00:04:46 jdk
00:00:01 langtools
00:13:11 TOTAL
-------------------------
Finished building OpenJDK for target 'default'

WARNING: You have the following ALT_ variables set:
ALT_PARALLEL_COMPILE_JOBS=8 ALT_BOOTDIR=/usr/share/java ALT_OUTPUTDIR=/home/ling/jdk/build
ALT_ variables are deprecated and will be ignored. Please clean your environment.


ling@aidong:~/jdk$ /home/ling/jdk/build/linux-x86_64-normal-server-fastdebug/jdk/bin/javac ./HelloWorld.java
ling@aidong:~/jdk$ ls
ASSEMBLY_EXCEPTION  HelloWorld.java  Makefile  README-builds.html  build   configure  get_source.sh  jaxp   jdk        make     test
HelloWorld.class    LICENSE          README    THIRD_PARTY_README  common  corba      hotspot        jaxws  langtools  nashorn
ling@aidong:~/jdk$ java HelloWorld
HelloWorld openjdk
```  
3. 运行虚拟机
```shell
# 添加环境变量
LD_LIBRARY_PATH=.:${JAVA_HOME}/jre/lib/amd64/native_threads:${JAVA_HOME}/jre/lib/amd64
```
4. 编译错误汇总
   * ubuntu内核版本过高
   ```shell
    *** This OS is not supported: Linux aidong 4.4.0-18362-Microsoft #476-Microsoft Fri Nov 01 16:53:00 PST 2019 x86_64 x86_64 x86_64 GNU/Linux
    /home/ling/jdk/hotspot/make/linux/Makefile:234: recipe for target 'check_os_version' failed
    make[5]: *** [check_os_version] Error 1
    make[4]: *** [linux_amd64_compiler2/debug] Error 2
    /home/ling/jdk/hotspot/make/linux/Makefile:255: recipe for target 'linux_amd64_compiler2/debug' failed
    Makefile:216: recipe for target 'generic_build2' failed
    make[3]: *** [generic_build2] Error 2
    Makefile:167: recipe for target 'fastdebug' failed
    make[2]: *** [fastdebug] Error 2
    make[1]: *** [/home/ling/jdk/build/linux-x86_64-normal-server-fastdebug/hotspot/_hotspot.timestamp] Error 2
    HotspotWrapper.gmk:44: recipe for target '/home/ling/jdk/build/linux-x86_64-normal-server-fastdebug/hotspot/_hotspot.timestamp' failed
    /home/ling/jdk//make/Main.gmk:108: recipe for target 'hotspot-only' failed
    make: *** [hotspot-only] Error 2

    # 解决方案:vim make/linux/Makefile
    :/SUPPORTED_OS_VERSION 搜索改关键字
    - SUPPORTED_OS_VERSION = 2.4% 2.5% 2.6% 3%
    + SUPPORTED_OS_VERSION = 2.4% 2.5% 2.6% 4%

    # 解决方案:vim xxx/hotspot/make/linux/Makefile 67行
   ```

   * make版本的问题，4.0以后make-I和-j选项混乱
   ```shell
    /usr/bin/make: invalid option -- '/'
    /usr/bin/make: invalid option -- 'a'
    /usr/bin/make: invalid option -- '/'
    /usr/bin/make: invalid option -- 'c'
    Usage: make [options] [target] ...
    Options:
    -b, -m                      Ignored for compatibility.
    -B, --always-make           Unconditionally make all targets.
    -C DIRECTORY, --directory=DIRECTORY
                                Change to DIRECTORY before doing anything.
    -d                          Print lots of debugging information.
    --debug[=FLAGS]             Print various types of debugging information.
    -e, --environment-overrides
                                Environment variables override makefiles.
    --eval=STRING               Evaluate STRING as a makefile statement.
    -f FILE, --file=FILE, --makefile=FILE
                                Read FILE as a makefile.
    -h, --help                  Print this message and exit.
    -i, --ignore-errors         Ignore errors from recipes.
    -I DIRECTORY, --include-dir=DIRECTORY
                                Search DIRECTORY for included makefiles.
    -j [N], --jobs[=N]          Allow N jobs at once; infinite jobs with no arg.
    -k, --keep-going            Keep going when some targets can't be made.
    -l [N], --load-average[=N], --max-load[=N]
                                Don't start multiple jobs unless load is below N.
    -L, --check-symlink-times   Use the latest mtime between symlinks and target.
    -n, --just-print, --dry-run, --recon
                                Don't actually run any recipe; just print them.
    -o FILE, --old-file=FILE, --assume-old=FILE
                                Consider FILE to be very old and don't remake it.
    -O[TYPE], --output-sync[=TYPE]
                                Synchronize output of parallel jobs by TYPE.
    -p, --print-data-base       Print make's internal database.
    -q, --question              Run no recipe; exit status says if up to date.
    -r, --no-builtin-rules      Disable the built-in implicit rules.
    -R, --no-builtin-variables  Disable the built-in variable settings.
    -s, --silent, --quiet       Don't echo recipes.
    -S, --no-keep-going, --stop
                                Turns off -k.
    -t, --touch                 Touch targets instead of remaking them.
    --trace                     Print tracing information.
    -v, --version               Print the version number of make and exit.
    -w, --print-directory       Print the current directory.
    --no-print-directory        Turn off -w, even if it was turned on implicitly.
    -W FILE, --what-if=FILE, --new-file=FILE, --assume-new=FILE
                                Consider FILE to be infinitely new.
    --warn-undefined-variables  Warn when an undefined variable is referenced.

    This program built for x86_64-pc-linux-gnu
    Report bugs to <bug-make@gnu.org>
    make[5]: *** [ad_stuff] Error 2
    /home/ling/jdk/hotspot/make/linux/makefiles/top.make:91: recipe for target 'ad_stuff' failed
    /home/ling/jdk/hotspot/make/linux/Makefile:289: recipe for target 'fastdebug' failed
    make[4]: *** [fastdebug] Error 2
    Makefile:216: recipe for target 'generic_build2' failed
    make[3]: *** [generic_build2] Error 2
    make[2]: *** [fastdebug] Error 2
    Makefile:167: recipe for target 'fastdebug' failed
    HotspotWrapper.gmk:44: recipe for target '/home/ling/jdk/build/linux-x86_64-normal-server-fastdebug/hotspot/_hotspot.timestamp' failed
    make[1]: *** [/home/ling/jdk/build/linux-x86_64-normal-server-fastdebug/hotspot/_hotspot.timestamp] Error 2
    /home/ling/jdk//make/Main.gmk:108: recipe for target 'hotspot-only' failed
    make: *** [hotspot-only] Error 2

    # 解决方案一: 降级make4.0以下(未测试)
    
    # 解决方案二:
    vim xxx/hotspot/make/linux/makefiles/adjust-mflags.sh
    - s/ -\([^     ][^     ]*\)j/ -\1 -j/
    + s/ -\([^     I][^     ]*\)j/ -\1 -j/
   ```

   * gcc/g++ 版本过高
   ```shell
    In file included from /home/ling/jdk/hotspot/src/share/vm/memory/sharedHeap.hpp:29:0,
            from /home/ling/jdk/hotspot/src/share/vm/gc_implementation/parallelScavenge/psParallelCompact.hpp:34,
            from /home/ling/jdk/hotspot/src/share/vm/gc_implementation/shared/markSweep.inline.hpp:33,
            from /home/ling/jdk/hotspot/src/share/vm/oops/oop.inline.hpp:29,
            from /home/ling/jdk/hotspot/src/share/vm/classfile/classFileParser.hpp:30,
            from /home/ling/jdk/hotspot/src/share/vm/classfile/classLoader.hpp:28,
            from /home/ling/jdk/hotspot/src/share/vm/classfile/systemDictionary.hpp:29,
            from /home/ling/jdk/hotspot/src/share/vm/ci/ciEnv.hpp:30,
            from /home/ling/jdk/hotspot/src/share/vm/ci/ciUtilities.hpp:28,
            from /home/ling/jdk/hotspot/src/share/vm/ci/ciNullObject.hpp:30,
            from /home/ling/jdk/hotspot/src/share/vm/ci/ciConstant.hpp:29,
            from /home/ling/jdk/hotspot/src/share/vm/ci/ciArray.hpp:29,
            from /home/ling/jdk/hotspot/src/share/vm/precompiled/precompiled.hpp:33:
    /home/ling/jdk/hotspot/src/share/vm/memory/generation.hpp:421:17: error: invalid suffix on literal; C++11 requires a space between literal and string macro [-Werror=literal-suffix]
            warning("time warp: "INT64_FORMAT" to "INT64_FORMAT, _time_of_last_gc, now);
                 ^
    # 解决方案
    # 这里出现问题的原因是ubuntu版本过高,18.04默认的gcc/g++版本为7.0
    # 执行降级操作
    sudo apt-get install gcc-4.8
    sudo apt-get install g++-4.8
    sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.8 100
    sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-4.8 100
    降级操作后需要重新执行./configure --enable-debug 否则版本即使gcc/g++ --version变了还是会报错
    make  2>&1 | tee $ALT_OUTPUTDIR/build.log
   ```
   * make错误
   ```shell
    In file included from /home/ling/jdk/hotspot/src/share/vm/utilities/histogram.hpp:32:0,
            from /home/ling/jdk/hotspot/src/share/vm/runtime/mutex.hpp:30,
            from /home/ling/jdk/hotspot/src/share/vm/classfile/classLoaderData.hpp:32,
            from /home/ling/jdk/hotspot/src/share/vm/oops/typeArrayKlass.hpp:28,
            from /home/ling/jdk/hotspot/src/share/vm/oops/typeArrayOop.hpp:29,
            from /home/ling/jdk/hotspot/src/share/vm/oops/constantPool.hpp:32,
            from /home/ling/jdk/hotspot/src/share/vm/oops/method.hpp:33,
            from /home/ling/jdk/hotspot/src/share/vm/runtime/frame.hpp:28,
            from /home/ling/jdk/hotspot/src/share/vm/code/codeBlob.hpp:30,
            from /home/ling/jdk/hotspot/src/share/vm/code/codeCache.hpp:28,
            from /home/ling/jdk/hotspot/src/cpu/x86/vm/assembler_x86.inline.hpp:30,
            from /home/ling/jdk/hotspot/src/share/vm/asm/assembler.inline.hpp:31,
            from /home/ling/jdk/hotspot/src/share/vm/precompiled/precompiled.hpp:30:
    /home/ling/jdk/hotspot/src/os/linux/vm/os_linux.inline.hpp: In static member function 'static dirent* os::readdir(DIR*, dirent*)':
    /home/ling/jdk/hotspot/src/os/linux/vm/os_linux.inline.hpp:142:18: error: 'int readdir_r(DIR*, dirent*, dirent**)' is deprecated (declared at /usr/include/dirent.h:183) [-Werror=deprecated-declarations]
    if((status = ::readdir_r(dirp, dbuf, &p)) != 0) {
                    ^
    /home/ling/jdk/hotspot/src/os/linux/vm/os_linux.inline.hpp:142:42: error: 'int readdir_r(DIR*, dirent*, dirent**)' is deprecated (declared at /usr/include/dirent.h:183) [-Werror=deprecated-declarations]
    if((status = ::readdir_r(dirp, dbuf, &p)) != 0) {
                                            ^
    cc1plus: all warnings being treated as errors
    /home/ling/jdk/hotspot/make/linux/makefiles/vm.make:295: recipe for target 'precompiled.hpp.gch' failed
    make[6]: *** [precompiled.hpp.gch] Error 1
    /home/ling/jdk/hotspot/make/linux/makefiles/top.make:119: recipe for target 'the_vm' failed
    make[5]: *** [the_vm] Error 2
    make[4]: *** [fastdebug] Error 2
    /home/ling/jdk/hotspot/make/linux/Makefile:289: recipe for target 'fastdebug' failed
    Makefile:216: recipe for target 'generic_build2' failed
    make[3]: *** [generic_build2] Error 2
    make[2]: *** [fastdebug] Error 2
    Makefile:167: recipe for target 'fastdebug' failed
    HotspotWrapper.gmk:44: recipe for target '/home/ling/jdk/build/linux-x86_64-normal-server-fastdebug/hotspot/_hotspot.timestamp' failed
    make[1]: *** [/home/ling/jdk/build/linux-x86_64-normal-server-fastdebug/hotspot/_hotspot.timestamp] Error 2
    /home/ling/jdk//make/Main.gmk:108: recipe for target 'hotspot-only' failed
    make: *** [hotspot-only] Error 2
    
    # 解决方案:
    vim xxx/hotspot/make/linux/makefiles/gcc.make
    注释 WARNINGS_ARE_ERRORS = -Werror
    或者 WARNINGS_ARE_ERRORS = -Wno-all  
    相关Warning都可以通过这个关闭
   ```
   * 单独编译JAVA虚拟机错误check_j2se_version版本不通过
   ```shell
    /usr/share/java/bin/javap javax.xml.transform.TransformerFactory > /dev/null 2>&1; \
    if [ $? -ne 0 ]; then \
    /usr/share/java/bin/java -version; \
    echo "*** An XSLT processor (J2SE 1.4.x or newer) is required" \
    "to bootstrap this build" 1>&2; \
    exit 1; \
    fi
    /bin/sh: 3: /usr/share/java/bin/java: not found
    *** An XSLT processor (J2SE 1.4.x or newer) is required to bootstrap this build
    /home/ling/jdk/hotspot/make/linux/Makefile:241: recipe for target 'check_j2se_version' failed
    make[3]: *** [check_j2se_version] Error 1
    make[3]: Leaving directory '/home/ling/jdk/build'
    /home/ling/jdk/hotspot/make/linux/Makefile:255: recipe for target 'linux_i486_compiler2/debug' failed
    make[2]: *** [linux_i486_compiler2/debug] Error 2
    make[2]: Leaving directory '/home/ling/jdk/build'
    Makefile:216: recipe for target 'generic_build2' failed
    make[1]: *** [generic_build2] Error 2
    make[1]: Leaving directory '/home/ling/jdk/hotspot/make'
    Makefile:167: recipe for target 'product' failed
    make: *** [product] Error 2
    
    # 解决方案:
    ALT_BOOTDIR需要配置正确的jdk路径
    apt-get安装的java路径默认为 /usr/lib/jvm/java-8-openjdk-amd64/bin
   ```

   * 单独构建虚拟机报错:默认构建32版本的HotSpot 未安装32位lib是报错
   ```shell
   In file included from /home/ling/jdk/hotspot/src/share/vm/prims/jni.h:39:0,
                 from /home/ling/jdk/hotspot/src/share/vm/prims/jvm.h:28,
                 from /home/ling/jdk/hotspot/src/share/vm/utilities/debug.hpp:28,
                 from /home/ling/jdk/hotspot/src/share/vm/runtime/globals.hpp:28,
                 from /home/ling/jdk/hotspot/src/share/vm/memory/allocation.hpp:28,
                 from /home/ling/jdk/hotspot/src/share/vm/memory/iterator.hpp:28,
                 from /home/ling/jdk/hotspot/src/share/vm/memory/genOopClosures.hpp:28,
                 from /home/ling/jdk/hotspot/src/share/vm/oops/klass.hpp:28,
                 from /home/ling/jdk/hotspot/src/share/vm/runtime/handles.hpp:28,
                 from /home/ling/jdk/hotspot/src/share/vm/memory/universe.hpp:28,
                 from /home/ling/jdk/hotspot/src/share/vm/code/oopRecorder.hpp:28,
                 from /home/ling/jdk/hotspot/src/share/vm/asm/codeBuffer.hpp:28,
                 from /home/ling/jdk/hotspot/src/share/vm/asm/assembler.hpp:28,
                 from /home/ling/jdk/hotspot/src/share/vm/precompiled/precompiled.hpp:29:
    /usr/include/stdio.h:27:36: fatal error: bits/libc-header-start.h: No such file or directory
    #include <bits/libc-header-start.h>
                                        ^
    compilation terminated.
    /home/ling/jdk/hotspot/make/linux/makefiles/vm.make:295: recipe for target 'precompiled.hpp.gch' failed
    make[4]: *** [precompiled.hpp.gch] Error 1
    make[4]: Leaving directory '/home/ling/jdk/build/linux_i486_compiler2/product'
    /home/ling/jdk/hotspot/make/linux/makefiles/top.make:119: recipe for target 'the_vm' failed
    make[3]: *** [the_vm] Error 2
    make[3]: Leaving directory '/home/ling/jdk/build/linux_i486_compiler2/product'
    /home/ling/jdk/hotspot/make/linux/Makefile:289: recipe for target 'product' failed
    make[2]: *** [product] Error 2
    make[2]: Leaving directory '/home/ling/jdk/build'
    Makefile:216: recipe for target 'generic_build2' failed
    make[1]: *** [generic_build2] Error 2
    make[1]: Leaving directory '/home/ling/jdk/hotspot/make'
    Makefile:167: recipe for target 'product' failed
    make: *** [product] Error 2

    # 解决方式一:
    apt-get install gcc-multilib 这样构建的是32位版本
    # 解决方式二:
    export LP64=1
   ```