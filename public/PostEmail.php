<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <link rel="stylesheet" href="style.css">

        <title>Contact | CV</title>
    </head>
    
    <body class="bg-gray-900">
        <!-- Header & Nav Container-->
        <header class="sticky top-0 border-b-2 p-5 bg-gray-900">
            <div class="flex items-center justify-between max-w-screen-x1">
                <div class="flex items-center flex-shrink-0 mr-6">
                    <span class="font-bold text-white text-xl">Mark</span>
                </div>
                <div class="w-full items-center justify-end flex-shrink flex-grow sm:flex sm:items-center sm:w-auto border-l-2">
                    <a href="index.html" class="inline-block text-white mt-4 sm:inline-block sm:mt-0 text-black p-1 ml-2 mr-2 hover:text-blue-500 hover:bg-gray-300">Home</a>
                    <a href="portfolio.html" class="inline-block text-white mt-4 sm:inline-block sm:mt-0 text-black p-1 ml-2 mr-2 hover:text-blue-500 hover:bg-gray-300">Portfolio</a>
                    <a href="about.html" class="inline-block text-white mt-4 sm:inline-block sm:mt-0 text-black p-1 ml-2 mr-2 hover:text-blue-500 hover:bg-gray-300">About</a>
                    <a href="#" class="line-through uppercase cursor-not-allowed inline-block text-white mt-4 sm:inline-block sm:mt-0 text-black p-1 ml-2 mr-2">Contact</a>
                    <a href="extra.html" class="inline-block text-black mt-4 sm:inline-block sm:mt-0 text-black p-1 ml-2 mr-2  border-2 hover:text-gray-900 hover:bg-gray-300 hover:bg-teal-300 hover:border-transparent rounded px-3 bg-gray-300">Extra</a>
                </div>        
            </div>
        </header><br/>

        <!--Custom Bread Crumb-->
        <div class="sm:flex-wrap md:flex-wrap p-4">
            <section class="inline-block max-w-5xl mx-auto border-b-2 p-2 m-2">
                <h3 class="text-white font-black m-3">where to<br/>
                    <span class="text-2xl sm:text-3xl mb-3 text-teal-200 font-black">find </span><br/>
                    <span class="text-4xl sm:text-5xl mb-3 text-gray-200 font-extrabold font-black">ME</span></h3><br/>
                </h3>
            </section>
        </div>
            
        <?php	
            if(isset($_POST['contact_Name']) && isset($_POST['contact_Email']) && isset($_POST['contact_Message'])){
                $contact_Name = $_POST['contact_Name'];
                $contact_Email = $_POST['contact_Email'];
                $contact_Message = $_POST['contact_Message'];
                    
                if(!empty($contact_Name) && !empty($contact_Email) && !empty($contact_Message)){
                        
                    $to = 'mark@icloud.com';
                    $subject = "Website Enquiry";
                    $body = $contact_Message."\n\n".$contact_Name."\n";
                    $headers = 'From: '.$contact_Email;
                    
                    if(@mail($to, $subject, $body, $headers)){
                        echo 'Thank you for sending us an email... We\'ll get back to you as soon as possible.';
                    }else{
                        echo 'Sorry... We could not process your request at this time. Please try again later.';
                    }
                }else{
                        
                }
            }								
        ?>

        <!-- Contact-->
        <div class="sm:flex-wrap md:flex-wrap p-4">
                <p class="inline-block w-full m-3  sm:w-1/2 text-gray-300 leading-relaxed">
                    All the below listed is where to find Me!
                        <span class="italic">Preferably contact Me via email</span><br/><br/>
                </p>

                <div class=" inline-block sm:grid grid-cols-2 gap-4">
                    <div class="w-full border-b-2 p-2 mb-6">
                        <form action="PostEmail.php" method="post">
                            <h1 class="text-2xl text-teal-200 mb-3">email Me</h1>
                            <input name="contact_Name" class="placeholder-gray-500 border rounded w-full p-1 mb-3" placeholder="Mark Langa">
                            <input name="contact_Email" class="placeholder-gray-500 border rounded w-full p-1 mb-3" placeholder="marklanga@icloud.com">
                            <input name="contact_Message" class="placeholder-gray-500 border rounded w-full p-1 mb-3" placeholder="Your message...">
                            <input type="submit" class="text-gray-900 border-2 rounded hover:text-gray-600 hover:bg-gray-100 p-1 px-6">
                                
                            </input>
                        </form>
                    </div>
                    <div class="inline-block grid grid-cols-2 p-2">
                        <h1 class="text-2xl text-teal-200 mb-2">social Media</h1>
                        <div></div>

                        <div class="border-dashed border-b-2 mb-3 text-white font-black">platform: </div>
                        <div class="border-b-2 mb-3 text-white"><a href="" class="border p-1 cursor-not-allowed">click</a></div>
    
                        <div class="border-dashed border-b-2 mb-3 text-green-400 font-black">wa: </div>
                        <div class="border-b-2 mb-3 text-white"><a href="https://wa.link/whxwcp" class="border p-1 hover:border-transparent hover:bg-green-400">contact</a></div>
            
                        <div class="border-dashed border-b-2 mb-3 text-blue-400 font-black">li: </div>
                        <div class="border-b-2 mb-3 text-white"><a href="https://www.linkedin.com/mwlite/in/mark-langa" class="border p-1 hover:border-transparent hover:bg-blue-400">connect</a></div>           
                         
                        <div class="border-dashed border-b-2 mb-3 text-red-300 font-black">ig: </div>
                        <div class="border-b-2 mb-3 text-white"><a href="https://www.instagram.com/mark_s_langa/" class="border p-1 hover:border-transparent hover:bg-red-300">follow</a></div>
            
                        <div class="border-dashed border-b-2 mb-3 text-blue-600 font-black">fb: </div>
                        <div class="border-b-2 mb-3 text-white"><a href="https://www.facebook.com/markm.langa" class="border p-1 hover:border-transparent hover:bg-blue-600">friend</a></div>
            
                        <div class="border-dashed border-b-2 mb-3 text-blue-300 font-black">tt: </div>
                        <div class="border-b-2 mb-3 text-white"><a href="https://www.twitter.com/Mark_MkM" class="border p-1 hover:border-transparent hover:bg-blue-300">tweet</a></div>
                    </div>
                </div>
                
        </div>

        <!-- Footer Container-->
        <footer class="w-full bg-gray-300 px-4 py-3 justify-evenly my-5">
            <span class="block sm:inline">Designed & Built by Mark Langa &copy;</span>
        </footer>
    </body>
</html>