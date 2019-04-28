import org.springframework.context.annotation.Configuration
import org.springframework.boot.context.properties.ConfigurationProperties

@Configuration
@ConfigurationProperties(prefix="myconfig")
class MqttProperties {
    lateinit var myHost: String
    lateinit var myPort: String
    lateinit var myUser: String
    lateinit var myPass: String
}