package jtcall.videocall

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import androidx.core.app.NotificationCompat
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

class FirebaseMessagingService : FirebaseMessagingService() {

  override fun onNewToken(token: String) {
    super.onNewToken(token)
  }

  override fun onMessageReceived(remoteMessage: RemoteMessage) {
    remoteMessage.notification?.let { notification ->
      sendNotification(notification.title ?: "", notification.body ?: "")
    }
  }

  private fun sendNotification(title: String, body: String) {
    val channelId = "jtcall_channel"
    val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      val channel = NotificationChannel(
        channelId,
        "Llamadas",
        NotificationManager.IMPORTANCE_HIGH
      ).apply {
        description = "Canal para llamadas entrantes"
      }
      notificationManager.createNotificationChannel(channel)
    }

    val notificationBuilder = NotificationCompat.Builder(this, channelId)
      .setSmallIcon(android.R.drawable.ic_dialog_info) // Cambia por tu ícono
      .setContentTitle(title)
      .setContentText(body)
      .setAutoCancel(true)
      .setPriority(NotificationCompat.PRIORITY_HIGH)

    notificationManager.notify(0, notificationBuilder.build())
  }
}
