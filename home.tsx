export default function Home() {
  const handleExternalLink = () => {
    // This will be replaced with the actual external URL
    // Здесь будет URL, предоставленный пользователем
    window.open("https://example.com", "_blank");
  };
-9
+9
        <header className="text-center space-y-4">
          <Shield className="w-16 h-16 mx-auto text-primary" />
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Guide to Online Anonymity
            Руководство по анонимности в интернете
          </h1>
        </header>
        <Card className="bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl">Basic Anonymity Guidelines</CardTitle>
            <CardTitle className="text-2xl">Базовые принципы анонимности</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              <li>Use a VPN service to mask your IP address and encrypt your traffic</li>
              <li>Enable private browsing mode to prevent local tracking</li>
              <li>Clear your browser cookies and cache regularly</li>
              <li>Use strong, unique passwords for each service</li>
              <li>Enable two-factor authentication whenever possible</li>
              <li>Avoid sharing personal information on social media</li>
              <li>Use encrypted messaging apps for sensitive communications</li>
              <li>Используйте VPN для скрытия IP-адреса и шифрования трафика</li>
              <li>Включайте режим приватного просмотра для предотвращения локального отслеживания</li>
              <li>Регулярно очищайте куки и кэш браузера</li>
              <li>Используйте сложные уникальные пароли для каждого сервиса</li>
              <li>Включайте двухфакторную аутентификацию везде, где это возможно</li>
              <li>Избегайте публикации личной информации в социальных сетях</li>
              <li>Используйте зашифрованные мессенджеры для важных коммуникаций</li>
            </ul>
          </CardContent>
        </Card>
-2
+2
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <span className="relative z-10 flex items-center gap-2">
              Advanced Guidelines
              Продвинутые рекомендации
              <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
        <footer className="text-center text-sm text-muted-foreground mt-12">
          <p>⚠️Примечание: Это базовые рекомендации. Для высшей анонимности посмотри мануал от стрипухи.</p>
          <p>⚠️ Примечание: Это базовые рекомендации. Для высшей анонимности посмотри мануал от стрипухи.</p>
        </footer>
      </div>
    </div>
